import express from 'express';
import crypto from 'crypto';
import bcrypt from 'bcryptjs';
import {User} from '../models/database.mjs';
import dotenv from 'dotenv';

dotenv.config();
const router=express.Router();
const port = process.env.PORT;

router.post('/forgot-password', async (req, res) => {
    const { email } = req.body;

    try {
        // Find the user by email
        const user = await User.findOne({ email });
        if (!user) {
            return res.status(400).send('No user with that email');
        }

        // Generate a reset token (using a library or just a random string)
        const resetToken = crypto.randomBytes(32).toString('hex');
        
        // Set the token's expiration time (e.g., 1 hour)
        const resetTokenExpire = Date.now() + 3600000;

        // Update user with the reset token and expiration time
        user.resetPasswordToken = resetToken;
        user.resetPasswordExpires = resetTokenExpire;
        await user.save();

        // Send the reset token to the user (either by email or URL with the token)
        const resetUrl = `http://localhost:${port}/reset-password/${resetToken}`;
        
        // (If you're not using email, just show the URL for now)
        res.send(`Reset password at: ${resetUrl}`);

    } catch (error) {
        console.error('Error handling forgot password:', error);
        res.status(500).send('Internal Server Error');
    }
});

router.get('/reset-password/:token', async (req, res) => {
    const { token } = req.params;

    try {
        // Find user by reset token and check if it's expired
        const user = await User.findOne({
            resetPasswordToken: token,
            resetPasswordExpires: { $gt: Date.now() }
        });

        if (!user) {
            return res.status(400).send('Password reset token is invalid or has expired');
        }

        // Render reset password form
        res.render('resetpassword', { token });
    } catch (error) {
        console.error('Error handling reset password token:', error);
        res.status(500).send('Internal Server Error');
    }
});
router.post('/reset-password/:token', async (req, res) => {
    const { token } = req.params;
    const { password, confirmPassword } = req.body;

    if (password !== confirmPassword) {
        return res.status(400).send('Passwords do not match');
    }

    try {
        // Find the user by the token and ensure it's not expired
        const user = await User.findOne({
            resetPasswordToken: token,
            resetPasswordExpires: { $gt: Date.now() }
        });

        if (!user) {
            return res.status(400).send('Password reset token is invalid or has expired');
        }

        // Hash the new password
        const salt = await bcrypt.genSalt(10);
        user.password = await bcrypt.hash(password, salt);

        // Clear the reset token and expiration
        user.resetPasswordToken = undefined;
        user.resetPasswordExpires = undefined;

        // Save the updated user
        await user.save();

        res.send('Password has been reset! You can now log in with your new password.');
    } catch (error) {
        console.error('Error resetting password:', error);
        res.status(500).send('Internal Server Error');
    }
});


export default router;