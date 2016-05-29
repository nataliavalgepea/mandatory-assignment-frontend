(function ($) {
    "use strict";
    var products = [
        {
            id: 1,
            img: 'css/images/products/68850.jpg',
            name: 'Product name',
            description: 'Product description'
        },
        {
            id: 2,
            img: 'css/images/products/68850.jpg',
            name: 'Product name',
            description: 'Product description'
        },
        {
            id: 3,
            img: 'css/images/products/68850.jpg',
            name: 'Product name',
            description: 'Product description'
        },
        {
            id: 4,
            img: 'css/images/products/68850.jpg',
            name: 'Product name',
            description: 'Product description'
        },
        {
            id: 5,
            img: 'css/images/products/68850.jpg',
            name: 'Product name',
            description: 'Product description'
        },
        {
            id: 6,
            img: 'css/images/products/68850.jpg',
            name: 'Product name',
            description: 'Product description'
        },
        {
            id: 7,
            img: 'css/images/products/68850.jpg',
            name: 'Product name',
            description: 'Product description'
        },
        {
            id: 8,
            img: 'css/images/products/68850.jpg',
            name: 'Product name',
            description: 'Product description'
        }
    ];
    var shoppingCart = [];

    /**
     * Loops through the array of products and renders them on the page
     */
    function renderProductsOnPage() {
        for (var i = 0; i < products.length; i++) {
            var product = products[i];

            $('ul.rig.columns-4').append(
                '<li>' +
                '<img src="' + product.img + '" alt="Product" />' +
                '<h3>' + product.name + '</h3>' +
                '<p>' + product.description + '</p>' +
                '<button name="' + product.id + '" class="add_cart_btn">Add to cart</button>' +
                '</li>'
            );
        }
    }

    /**
     * Updates the label of shopping cart depending on the amount of products in the cart
     */
    function updateShoppingCart() {
        var shoppingCartEmptyText = 'Your shopping card is empty';
        $('#shopping_cart_text').html(shoppingCartEmptyText);

        if (shoppingCart.length > 0) {
            var item = shoppingCart.length === 1 ? 'item' : 'items';

            $('#shopping_cart_text').html('You have <strong>' + shoppingCart.length + ' ' + item + '</strong> in your shopping cart');
        }
    }

    $(document).ready(function () {
        renderProductsOnPage();
        updateShoppingCart();


        $('.add_cart_btn').click(function () {
            var button = $(this);
            var productId = this.name;

            // Checks whether selected product is already in the cart
            var matches = $.grep(shoppingCart, function (e) {
                return e == productId;
            });

            if (matches.length > 0) {
                /**
                 * Remove the product from the cart
                 */
                shoppingCart.shift(productId);
                button.removeClass('added');
                button.text('Add to cart');
            } else {
                /**
                 * Add the product to the cart
                 */
                shoppingCart.unshift(productId);
                button.addClass('added');
                button.text('Remove from cart');
            }

            updateShoppingCart();
        });
    });

})(jQuery);