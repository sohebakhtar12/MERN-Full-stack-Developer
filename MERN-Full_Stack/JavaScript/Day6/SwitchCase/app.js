// var m = 13 //m=months
// switch (m) {
//     case 1:
//         console.log(31)
//         break;
//     case 2:
//         console.log(29)
//         break;
//     case 3:
//         console.log(31)
//         break;
//     case 4:
//         console.log(30)
//         break;
//     case 5:
//         console.log(31)
//         break;
//     case 6:
//         console.log(30)
//         break;
//     case 7:
//         console.log(31)
//         break;
//     case 8:
//         console.log(31)
//         break;
//     case 9:
//         console.log(30)
//         break;
//     case 10:
//         console.log(31)
//         break;
//     case 11:
//         console.log(30)
//         break;
//     case 12:
//         console.log(31)
//         break;
//     default:
//         console.log("12 months hi hota hai bhaii ")

// }

//-----------------------------------------------------------------------------------
// var m = 5 //m=months
// switch (m) {
//     case 1:
//     case 3:
//     case 5:
//     case 7:
//     case 8:
//     case 10:
//     case 12:
//         console.log(31)
//         break;

//     case 4:
//     case 6:
//     case 9:
//     case 11:

//         console.log(30)
//         break;
//     case 2:
//         console.log(29)
//         break;
//     default:
//         console.log("12 months hi hota hai bhaii ")



// }

//-------------------------------------------------
// var m = 65 // m=maeks
// switch (true) {
//     case m >= 90 && m <= 100:
//         console.log("A")
//         break;
//     case m >= 80 && m < 90:
//         console.log("B")
//         break;
//     case m >= 70 && m < 80:
//         console.log("C")
//         break;
//     case m >= 60 && m < 70:
//         console.log("D")
//         break;
//     case m < 0 || m > 100:
//         console.log("invail value")
//         break;
//     default:
//         console.log("fail")
// }
//------------------------------------------------------------
// var n1 = 8;
// var n2 = 2;
// var opertion = "multi"
// switch (opertion) {
//     case "plus":
//         console.log(n1 + n2);
//         break;
//     case "multi":
//         console.log(n1 * n2);
//         break;
//     case "diff":
//         console.log(n1 - n2);
//         break;
//     case "div":
//         console.log(n1 % n2);
//         break;
//     default:
//         console.log("invalid input")
// }
//----------------------------------------------------------------

var n1 = 8;
var n2 = 3;
var opertion = "+"

if (opertion == "*") {
    console.log(n1 * n2);
} else if (opertion == "+") {
    console.log(n1 + n2);

} else if (opertion == "-") {
    console.log(n1 - n2);

} else if (opertion == "/") {
    console.log(n1 % n2);

} else {
    console.log("invalid input")

}