let apiURL = "https://fakestoreapi.com/products/";

let container = document.getElementById("product-container");
let errorMessage = document.getElementById("error-message");

fetch(apiURL)
    .then(function(response) {
        if (!response.ok) {
            throw new Error("Failed to fetch products");
        }

        return response.json();
    })
    .then(function(products) {
        container.innerHTML = "";

        products.forEach(function(product) {
            let title = product.title;
            let description = product.description;

            if (title.length > 60) {
                title = title.slice(0, 60) + "...";
            }

            if (description.length > 120) {
                description = description.slice(0, 120) + "...";
            }

            let card = document.createElement("div");
            card.className = "product-card";

            let image = document.createElement("img");
            image.src = product.image;
            image.alt = product.title;
            image.className = "product-image";

            let productTitle = document.createElement("h3");
            productTitle.className = "product-title";
            productTitle.textContent = title;

            let category = document.createElement("p");
            category.className = "product-category";
            category.textContent = "Category: " + product.category;

            let productDescription = document.createElement("p");
            productDescription.className = "product-description";
            productDescription.textContent = description;

            card.appendChild(image);
            card.appendChild(productTitle);
            card.appendChild(category);
            card.appendChild(productDescription);
            container.appendChild(card);
        });
    })
    .catch(function(error) {
        errorMessage.textContent = "Error: " + error.message;
        container.innerHTML = "";
        console.log(error);
    })
    .finally(function() {
        console.log("API called");
    });