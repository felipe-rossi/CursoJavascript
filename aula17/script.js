var inputNumero = document.getElementById("inputNumero"); 
var btnAdicionar = document.getElementById("btnAdicionar"); 
var selectNumeros = document.getElementById("selectValorAdicionado");
var btnFinalizar = document.getElementById("btnFinalizar"); 
var divResultado = document.getElementById("resultado"); 
var elementoTexto = document.createElement("h4");
var numeros = [];
var soma_numeros = 0;
var media = 0;

btnAdicionar.addEventListener("click", function adicionarNumero() {
    var numero = Number(inputNumero.value);

    if (numero <=0 || numero >= 100) {
        alert("Por favor digite um número entre 1 e 100")
    }else{
        numeros.push(numero);
        let option = document.createElement("option");
        option.text = `Valor ${numero} adicionado.`
        selectNumeros.appendChild(option);
    }
    
}); 

btnFinalizar.addEventListener("click", function finalizar() {
    soma_numeros = 0;
    media = 0;

    if(numeros.length <= 0){
        alert("Por favor adicione um numero para finalizar")
    }else{
        for (let i = 0; i < numeros.length; i++) {
            soma_numeros += numeros[i];
        }
    
        media = soma_numeros/ numeros.length;
    
        elementoTexto.innerHTML = "";
        elementoTexto.innerHTML = 
        `Ao todo, temos ${numeros.length} cadastrados<br>
        O maior valor informado foi ${Math.max.apply(null, numeros)}<br>
        O menor valor informado foi ${Math.min.apply(null, numeros)}<br>
        Somando todos os valores, temos ${soma_numeros}<br>
        A média dos valores digitados é ${media}
        `;
    
        divResultado.appendChild(elementoTexto);
    }

});