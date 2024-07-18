document.querySelectorAll('.add-to-cart').forEach(button => {
    button.addEventListener('click', async () => {
        const productId = button.getAttribute('data-id');
        try {
            const response = await fetch('/cart/add', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ productId, quantity: 1 })
            });
            const result = await response.json();
            console.log(result.message);
        } catch (error) {
            console.error('Error adding product to cart:', error);
            alert('Error adding product to cart');
        }
    });
});
document.getElementById('filter-form').addEventListener('submit', function(event) {
    event.preventDefault();
    const formData = new FormData(this);
    for (let entry of formData.entries()) {
        console.log(entry[0] + ': ' + entry[1]);
    }
    const queryParams = new URLSearchParams(formData).toString();
    console.log('Query Params:', queryParams);
    if (window.location.pathname === '/football-products') {
        window.location.href = `/football-products?${queryParams}`;
    }
    if (window.location.pathname === '/cricket-products') {
        window.location.href = `/cricket-products?${queryParams}`;
    }
    if (window.location.pathname === '/basketball-products') {
        window.location.href = `/basketball-products?${queryParams}`;
    }
    if (window.location.pathname === '/boxing-products') {
        window.location.href = `/boxing-products?${queryParams}`;
    }
    if (window.location.pathname === '/tabletennis-products') {
        window.location.href = `/tabletennis-products?${queryParams}`;
    }
    if (window.location.pathname === '/badminton-products') {
        window.location.href = `/badminton-products?${queryParams}`;
    }
});