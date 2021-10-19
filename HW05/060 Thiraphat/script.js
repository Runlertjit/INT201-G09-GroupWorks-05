// Higher Order Function ในการเพิ่มจำนวนสินค้าใน stock ที่มีเป็น 2 เท่า
const numberOfProduct = [{name:"Coke",quantity:2},{name:"Pepsi",quantity:5},{name:"Water",quantity:10}];
const doubleOfProduct = numberOfProduct.map(function(item) {
    return item.quantity * 2;
});
// closure
const changeNameOfShop = (name) => {
    let shopName = "HewShop";
    let showName;
    if(name != null || name != undefined){
        shopName = name;
    }
    return showName = () => {
        console.log(shopName)
    }
}
// ค่าในนี้ควรจะหายไปหากไม่ได้ใช้ แต่ closure ทำให้ค่านั้นยังคงอยู่
const printShopName = changeNameOfShop('AroyShop');

export {printShopName,doubleOfProduct,numberOfProduct, changeNameOfShop};

