
//Higher order function
function calTax(price) { 
    return price*0.07; //คืนค่าที่ราคารวมกับภาษี
}
function calService(price) {
    return price*0.1; //คืนค่าที่ราคารวมกับค่าเซอร์วิส
}
function calTotal(price, tax, service) {
    let total = price;
    total += service(total); //เรียก function ที่ใส่เข้ามาให่ทำงานคำนวนค่าเซอร์วิส
    total += tax(total); //เรียก function ที่ใส่เข้ามาให่ทำงานคำนวนภาษี
    return total; //total คือราคาที่รวมแล้ว
}
// console.log(calTotal(100,calTax,calService));
//ใส่ ราคา, function calTax และ function calService ที่เตรียมไว้


//closuse
function outer() {
    let name = 'Nitipoom'; //ประกาศตัวแปรใน outer function
    function inner() {
      console.log(name); //ให้แสดงชื่อที่อยู่ด้านนอก เรียกจาก inner fuction
    }
    return inner; //return inner function ที่ยังไม่ execute
}
// let showName = outer(); 
// showName();

//rest parameter
function rip(alive, alive2, ...rip) { //เป็นฟังก์ชั้นที่เปลี่ยนใน rest param เป็น Rest in Peace
    console.log(`${alive} is alive`); //แสดง param ตัวแรก
    console.log(`${alive2} is alive`); //แสดง param ตัวทึ่สอง
    return  rip.fill('Rest in Peace'); //เปลี่ยนทุกตัวที่อยู่ใน rip เป็น Rest in Peace
}

// console.log(rip('poom','tus','tee','mick'));

export {calService,calTax,calTotal,outer,rip};