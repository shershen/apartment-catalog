export const
    formatPrice = function (price) {
        if (price == null) return '0';
        price = price.toString();
        price = price.replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1 ");
        return price;
    };