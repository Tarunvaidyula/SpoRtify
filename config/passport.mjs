import passport from 'passport';
import {Strategy as Localstrategy}  from 'passport-local';
import bcrypt from 'bcryptjs';
import {User} from '../models/database.mjs';

passport.use(new Localstrategy({
    usernameField: 'email'
}, async (email, password, done) => {
    try {
        const user = await User.findOne({ email });
        if (!user) {
            return done(null, false, { message: 'Incorrect email.' });
        }
        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return done(null, false, { message: 'Incorrect password.' });
        }
        return done(null, user);
    } catch (err) {
        return done(err);
    }
}));

passport.serializeUser((user, done) => {
    done(null, user.id);
});

passport.deserializeUser(async (id, done) => {
    try {
        const user = await User.findById(id);
        done(null, user);
    } catch (err) {
        done(err);
    }
});

export default passport;

// middleware/auth.js
    export const ensureAuthenticated= (req, res, next) => {
      if (req.isAuthenticated()) {
        return next();
      }
      res.redirect('/login');
    };
    export const forwardAuthenticated= (req, res, next) => {
      if (!req.isAuthenticated()) {
        return next();
      }
      res.redirect('/homepage');
    };