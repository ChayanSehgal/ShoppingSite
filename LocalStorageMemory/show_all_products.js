document.addEventListener('DOMContentLoaded', function() {
    var productList = document.getElementById('productList');
    var products = JSON.parse(localStorage.getItem('products')) || [];

    function renderProducts() {
        productList.innerHTML = ''; // Clear the list before re-rendering

        products.forEach(function(product, index) {
            var listItem = document.createElement('li');
            listItem.innerHTML = `
                <img src="${product.imageUrl}" alt="${product.productName}" style="max-width:1000px; height:320px;">
                <p>${product.productName}</p>
                <p>Price: ${product.price}</p>
                <button class="delete-btn" data-index="${index}">Delete</button>
            `;

            productList.appendChild(listItem);
        });

        // Add event listeners to the delete buttons
        var deleteButtons = document.querySelectorAll('.delete-btn');
        deleteButtons.forEach(function(button) {
            button.addEventListener('click', function() {
                var index = this.getAttribute('data-index');
                products.splice(index, 1);
                localStorage.setItem('products', JSON.stringify(products));
                renderProducts(); // Re-render the products after deletion
            });
        });
    }

    renderProducts();

    // Add Product button functionality to add one product at a time
    var addProductButton = document.getElementById('addProduct');
    addProductButton.addEventListener('click', function() {
        // Prompt the user for product details (productName, price, imageUrl)
        var productName = prompt('Enter the product name:');
        var price = prompt('Enter the product price:');
        var imageUrl = prompt('Enter the image URL:');

        // Check if the user canceled the prompt or left any field empty
        if (productName && price && imageUrl) {
            // Create a new product object
            var newProduct = {
                productName: productName,
                price: price,
                imageUrl: imageUrl
            };

            // Add the new product to the products array
            products.push(newProduct);

            // Store the updated products array in localStorage
            localStorage.setItem('products', JSON.stringify(products));

            // Re-render the product list to display the new product
            renderProducts();
        } else {
            alert('Please fill in all product details.');
        }
    });
});
