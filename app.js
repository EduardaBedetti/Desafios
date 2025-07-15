//questão 1 corrigida
diaDaSemana = prompt('Qual é o dia da semana?');
if (diaDaSemana == 'Sábado') {
    alert('Bom fim de semana!');
} else if (diaDaSemana == 'Domingo') {
    alert('Bom fim de semana!');
} else {
    alert('Boa semana!');
}


//questao 2
let NumeroDigitado = prompt("Digite um numero");

if (NumeroDigitado >= 0) {
    alert("Positivo");
}   else{
    alert("numero negativo");
}

//questão 3
let pontuacao = 50;

if (pontuacao >= 100) {
    console.log("Parabéns você venceu!");
}   else {
    console.log("Tente novamente para ganhar");
}

//questão 4
let saldoConta = 500; 
alert(`Seu saldo é de R$${saldoConta}.`);

//questão 5
let Nome = prompt("Qual o seu nome?");
alert(`Boas-vindas ${Nome}`);

//Desafios utilizando While.

//questão 1
let contador = 1;
while (contador <= 9) {
    console.log(contador);
    contador += 1;
}

//questão 2
let numero = 10;
while (numero > 0) {
    console.log(numero);
    numero -= 1;
}

//questão 3
let numeroMaximo = prompt("Digite um número:");
let contagem = Number(numeroMaximo);

while (contagem >= 0) {
    console.log(contagem);
    contagem--;
}

//questão 4
let NuumeroDigitado = prompt("Digite um numero")
let Numero = Number(numeroDigitado);
let Contable =0;

while (Contable <= 0) {
        Contable++; 

}

                                                    
