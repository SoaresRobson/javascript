/* var nome = "Robson Soares";
var idade = 22;
var idade2 = 10;
var frase = "Japão é o melhor time do mundo"
//alert(nome + " tem " +idade +" anos!");
//alert(idade + idade2);
console.log(nome);
console.log(frase.replace("Japão", "Brasil"));
alert(frase.replace("Japão", "Brasil")); */

//var lista = ["maça", "pera", "laranja"];
//console.log(lista[1]);
//alert(lista[1]);
//lista.push("uva");
//lista.pop();
//console.log(lista);
//console.log(lista.join(" - "));

/*var fruta = {
    nome:"maça", cor:"vermelha"
}
console.log(fruta.nome);*/

/*var frutas = [
    {nome:"maça", cor:"vermelha"},
    {nome:"uva", cor:"roxa"}
]
console.log(frutas);*/
/*
var idade = prompt("Digite sua idade");
if(idade >= 18){
    alert("Maior de idade");
}else{
    alert("Menor de idade");
};*/

/*var count = 0;
while(count <5){
    console.log(count)
    count++;
}*/
/*
var count;
for(count=1; count<=5; count++){
    console.log(count)
}
*/
/*var d = new Date();
//mes começa do 0
alert(d.getMonth()+1);*/

/*function soma(n1, n2){
    return n1+n2;
}*/

//alert(soma(10,10));

function clicou(){
    document.getElementById("agradecimento").innerHTML = "<b>Obrigado por clicar</b>";
}
function redirecionar(){
    window.open("https://www.google.com.br")
}
function trocar(){
    document.getElementById("mousemove").innerHTML = "Obrigado por passar o mouse";
}
function voltar(){
    document.getElementById("mousemove").innerHTML = "Passe o mouse aqui";
}
function load(){
    alert("pagina carregada");
}
function funcaoChange(elemento){
    console.log(elemento.value);
}