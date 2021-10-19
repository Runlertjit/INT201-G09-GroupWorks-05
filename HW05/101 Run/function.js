
function median (...n){ // สร้าง Function ที่มี Parameter เป็น Rest
    let sort = n.sort((a,b) => a-b) // sort ตัวเลขโดยเรียงจากน้อยไปมาก
    let mid = Math.floor((sort.length+1)/2); // หาค่ากลางตามสูตรโดยจะปัดเลขลงถ้าหากมีทศนิยม
    return sort.length % 2 !== 0 ? sort[mid] : (sort[mid - 1] + sort[mid]) / 2; 
    // return โดยเช็คเงื่อนไขถ้า Length % 2 !== 0 แล้วเป็น True ก็จะ return sort ช่องที่ mid ของ Array
    // แต่ถ้า mod แล้วเท่ากับ False ก็จะ return (sort[mid - 1] + sort[mid]) / 2;
}

function average (...n){ // สร้าง Function ที่มี Parameter เป็น Rest
    return n.reduce((current,previous) => (current + previous)) / n.length
    // return ผลรวมทั้งหมดที่รับเข้า / จำนวนตัวเลขที่รับเข้ามา = ค่าเฉลี่ย
}

// Higher Order Function
export function calMedAve (select = String,...n){
    // สร้าง Function ที่มี Parameter เป็น Default โดยกำหนดว่าจะต้องเป็นค่า String เท่านั้น และ Rest Parameter
    if(select == 'median'){
        return `Median : ${median(...n)}`; // จะ return function median โดยรับค่า n มาจาก calMedAve
    }else if (select == 'average'){
        return `Average : ${average(...n)}`; // จะ return function average โดยรับค่า n มาจาก calMedAve
    }else{
        return `Please Select function` // ถ้าไม่เข้าเงื่อนไขไหนเลยจะ return `Please Select function`
    }
}


// Closure function
export function getMenu (){ // สร้าง Function
    let arrMenu = []; // สร้าง Array สำหรับเก็บค่า Argument
    for(let i = 0; i < arguments.length; i++){ // Loop 
        arrMenu.push(arguments[i]) // นำค่าจาก Argument เก็บลงไปใน Array
    }
    function find(a){ // สร้าง function ที่รับ parameter 1 ตัว
        let finding = arrMenu.findIndex(value => value.name.toLowerCase() == a.toLowerCase())
        // ใช้ findIndex ในการค้นหาข้อมูลใน Array โดยจะ return index ตัวแรกที่ผ่าน Test Function
        if (finding != -1){ //ถ้า finding ไม่เท่ากับ -1 (true)
            return arrMenu[finding] // return arrMenu[finding]
        }else{
            return `Not Found`; // ถ้าไม่เข้าเงื่อนไขใดจะ return `Not Found`
        }
    }
    return find; // return function find
}

// https://www.geeksforgeeks.org/javascript-importing-and-exporting-modules/





