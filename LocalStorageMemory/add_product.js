document.getElementById('productForm').addEventListener('submit', function(e) {
    e.preventDefault();

    var selectedProduct = document.getElementById('productSelect').value;

    if (!selectedProduct) {
        alert('Please select a product.');
        return;
    }

    var predefinedProducts = {
        "product1": {
            imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQiv2T_GcSgbTihoW7E73fWlHbRR2BizWKvtQ&usqp=CAU",
            price: "1,20,000",
            productName: "Iphone 14 Pro Max"
        },
        "product2": {
            imageUrl: "https://images-cdn.ubuy.co.in/64dab58344ea7d75fe319427-sony-playstation-5-video-game-console.jpg",
            price: "Rs.42,000",
            productName: "Play Station 5"
        },
        "product3": {
            imageUrl: "https://i.dell.com/is/image/DellContent/content/dam/ss2/product-images/dell-client-products/notebooks/alienware-notebooks/alienware-m16-amd/pdp/laptop-alienware-m16-amd-pdp-hero.psd?qlt=95&fit=constrain,1&hei=400&wid=570&fmt=png-alpha",
            price: "Rs.2,97,990",
            productName: "Alienware 16"
        }
    };

    var product = predefinedProducts[selectedProduct];

    if (!product) {
        alert('Invalid product selection.');
        return;
    }

    var products = JSON.parse(localStorage.getItem('products')) || [];
    products.push(product);
    localStorage.setItem('products', JSON.stringify(products));

    alert('Product added successfully!');
});
