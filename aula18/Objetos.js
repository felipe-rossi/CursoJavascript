let amigo = {
    nome: 'Felipe Rossi',
    peso: 75,
    sexo: 'M',
    engordar(p=0){
        console.log("Engordou");
        this.peso += p 
    }
}
console.log(`O ${amigo.nome} está com o peso ${amigo.peso}`);
amigo.engordar(5);
console.log(`O ${amigo.nome} está com o peso ${amigo.peso}`);