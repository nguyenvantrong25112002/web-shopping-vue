export const formatMoney = function(val) {
    return new Intl.NumberFormat("vi-VN").format(val);
}