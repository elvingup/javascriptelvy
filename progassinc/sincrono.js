let a = 3;
let b = 3;
/**
 * exemplo de codigo sincrono
 */
/* console.log("Síncrono: ", a + b);
a = 6;
console.log("Sincrono 2", a + b); */

/** assincrono */
setTimeout( () => {
    console.log("assincrono: ", a + b);
}, 3000)

a = 9;

console.log("Assincrono 2 ", a + b)
