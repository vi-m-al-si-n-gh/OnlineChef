let cart = [];

function addToCart() {
    const foodItem = document.getElementById('foodItem').value;

    cart.push({ foodItem });
    updateCart();
}

function updateCart() {
    console.log("Cart:", cart);
}

document.addEventListener('DOMContentLoaded', function () {
    const contactForm = document.getElementById('contact-form');

    contactForm.addEventListener('submit', function (e) {
        e.preventDefault();

        // You can add your logic here to handle form submission (e.g., send data to the server)

        alert('Form submitted successfully!');
        contactForm.reset();
    });
});