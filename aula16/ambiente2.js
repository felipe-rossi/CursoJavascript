function parOuIOmpar(numero) {
    
    if(numero % 2 == 0){
        return 'Par!';
    }else{
        return 'Impar!';
    }
}

let retornoFuncao = parOuIOmpar(3);
console.log(retornoFuncao);


function soma(numero1=0, numero2=0) {
    return numero1 + numero2;
}

console.log(soma(500, 500));