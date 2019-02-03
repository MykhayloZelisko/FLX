let price = prompt("Price without discount", "");
let discount = prompt("Discount", "");
if (!isNaN(parseFloat(price)) && isFinite(price) && 
!isNaN(parseFloat(discount)) && isFinite(discount) &&
price >= 0 && price <= 9999999 && discount >= 0 && discount <= 99 ) {
    price = Math.round(price*100)/100;
    let priceWithDis = price * (1 - discount / 100);
    priceWithDis = Math.round(priceWithDis*100)/100;
    let save = price - priceWithDis;
    save = Math.round(save*100)/100;
    alert (`rice without discount: ${price}
            Discount: ${discount}%
            Price with discount: ${priceWithDis}
            Saved: ${save}`);
} else {
    alert("Invalid input data");
}