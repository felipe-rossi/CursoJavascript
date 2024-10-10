let num = [5,8,2,9,3];

num.push(7);

console.log(num);
console.log(`Tamanho do array: ${num.length}`);
console.log(`Array ordernado: ${num.sort()}`);

console.log("------------------------------- !! --------------------------")

//Varendo um vector
num.forEach(numeros => {
    console.log(numeros);
});

console.log("------------------------------- !! --------------------------")

//Procurar um valor no vector
console.log(`Número 7 está na posição ${num.indexOf(7)} do Vector`);