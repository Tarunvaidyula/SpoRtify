document.querySelectorAll('.product-remove').forEach(button => {
    button.addEventListener('click', async () => {
        const productId = button.getAttribute('data-id');
        try {
            const response = await fetch('/cart/remove', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ productId })
            });
            const result = await response.json();
            console.log(result.message);
            if (response.status === 200) {
                location.reload();
            }
        } catch (error) {
            console.error('Error removing product from cart:', error);
            alert('Error removing product from cart');
        }
    });
});

document.querySelectorAll('.increment-quantity').forEach(button => {
    button.addEventListener('click', async () => {
        const productId = button.getAttribute('data-id');
        const productQuantityElement = button.parentElement.querySelector('.product-quantity');
        let quantity = parseInt(productQuantityElement.value, 10);
        quantity++;
        productQuantityElement.value = quantity;

        try {
            const response = await fetch('/cart/updateQuantity', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ productId, quantity })
            });

            if (!response.ok) {
                throw new Error('Failed to update quantity');
            }

            // Handle successful response, update UI as needed
            const result = await response.json();
            console.log(result.message); // Display success or error message
            location.reload(); // Reload the page after updating quantity

        } catch (error) {
            console.error('Error updating quantity:', error);
            alert('Error updating quantity');
        }
    });
});

document.querySelectorAll('.decrement-quantity').forEach(button => {
    button.addEventListener('click', async () => {
        const productId = button.getAttribute('data-id');
        const productQuantityElement = button.parentElement.querySelector('.product-quantity');
        let quantity = parseInt(productQuantityElement.value, 10);
        if (quantity > 1) {
            quantity--;
            productQuantityElement.value = quantity;

            try {
                const response = await fetch('/cart/updateQuantity', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({ productId, quantity })
                });

                if (!response.ok) {
                    throw new Error('Failed to update quantity');
                }
                const result = await response.json();
                console.log(result.message); // Display success or error message
                location.reload(); // Reload the page after updating quantity

            } catch (error) {
                console.error('Error updating quantity:', error);
                alert('Error updating quantity');
            }
        }
    });
});