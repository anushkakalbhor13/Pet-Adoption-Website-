// Common JavaScript functions for AdoptaFurryBuddy website

// Cart functionality
function addToCart(name, price) {
    // Initialize or retrieve cart from localStorage
    let cart = localStorage.getItem('cart');
    cart = cart ? JSON.parse(cart) : [];

    // Add item to cart
    cart.push({ name, price });
    localStorage.setItem('cart', JSON.stringify(cart));
    alert(`"${name}" has been added to your cart!`);
}

function updateCartCount() {
    let cart = localStorage.getItem('cart');
    cart = cart ? JSON.parse(cart) : [];
    const cartCount = cart.length;
    
    const cartCountElement = document.getElementById('cart-count');
    if (cartCountElement) {
        cartCountElement.innerText = `(${cartCount})`;
    }
}

// Initialize cart functionality when page loads
document.addEventListener('DOMContentLoaded', function() {
    // Update cart count on page load
    updateCartCount();
    
    // Add event listeners to all add-to-cart buttons
    document.querySelectorAll('.add-to-cart').forEach(button => {
        button.addEventListener('click', function() {
            const name = this.getAttribute('data-name');
            const price = parseFloat(this.getAttribute('data-price'));
            addToCart(name, price);
            updateCartCount();
        });
    });
});

// Adoption redirect function
function redirectToAdoptionDetails(name, price, image) {
    if (image) {
        window.location.href = `adoption_details.html?name=${name}&price=${price}&image=${image}`;
    } else {
        window.location.href = `adoption_details.html?name=${name}&price=${price}`;
    }
}

// Simple adoption function as fallback
function adopt(name) {
    alert(`Thank you for your interest in adopting ${name}! Please contact us for more details.`);
}

// Show more functionality for pet listings
function initializeShowMore() {
    // Show more dogs
    const showMoreButton = document.getElementById('showMores');
    if (showMoreButton) {
        const dogItems = document.querySelectorAll('.pet.hidden');
        let counter = 0;

        showMoreButton.addEventListener('click', function() {
            const maxToShow = counter + 3;
            for (let i = counter; i < maxToShow && i < dogItems.length; i++) {
                dogItems[i].classList.remove('hidden');
            }
            counter += 3;

            if (counter >= dogItems.length) {
                showMoreButton.style.display = 'none';
            }
        });
    }
}

// Login status check
function checkLogin() {
    // Simple check - in real app this would check session/token
    return localStorage.getItem('isLoggedIn') === 'true';
}

function navigate(page) {
    if (!checkLogin()) {
        alert("Please login to access this feature!");
        return false;
    }
    return true;
}