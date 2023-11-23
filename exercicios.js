// EXEMPLOS DE IMPLEMENTAÇÃO ---------------------------------------------------------------

// EXERCÍCIO 0A
function soma(num1, num2) {
  // implemente sua lógica aqui
  return num1 + num2
}

// EXERCÍCIO 0B
function imprimeMensagem() {
  // implemente sua lógica aqui
  const mensagem = prompt('Digite uma mensagem!')

  console.log(mensagem)
}

// EXERCÍCIOS PARA FAZER ------------------------------------------------------------------

// EXERCÍCIO 01
function calculaAreaRetangulo() {
  const altura = prompt("Altura do Retângulo")
  const largura = prompt("Largura do Retângulo")  

  const area = altura * largura
  console.log(area)

}


// EXERCÍCIO 02
function imprimeIdade() {
  const anoAtual = prompt("ano atual")
  const anoNascimento = prompt("ano do seu nascimento")
  idade = anoAtual - anoNascimento
  console.log(idade)

}

// EXERCÍCIO 03
function calculaIMC(peso, altura) {
  let imc = peso / (altura * altura)
  return imc

}

// EXERCÍCIO 04
function imprimeInformacoesUsuario() {
  const nome = prompt("Qual seu nome ?")
  const idade = prompt("Qual sua idade ?")
  const email = prompt("Qual seu email ?")

  console.log(`Meu nome é ${nome}, tenho ${idade} anos, e o meu email é ${email}.`)
  // "Meu nome é NOME, tenho IDADE anos, e o meu email é EMAIL."

}

// EXERCÍCIO 05
function imprimeTresCoresFavoritas() {
  const cor1 = prompt("Digite sua primeira cor favorita:")
  const cor2 = prompt("Digite sua segunda cor favorita:")
  const cor3 = prompt("Digite sua terceira cor favorita:")

  const coresFavoritas = [cor1, cor2, cor3]

  console.log(coresFavoritas)

}

// EXERCÍCIO 06
function retornaStringEmMaiuscula(string) {
  const stringMaiuscula = string.toUpperCase()

  return stringMaiuscula

}

// EXERCÍCIO 07
function calculaIngressosEspetaculo(custo, valorIngresso) {

  return Math.ceil(custo / valorIngresso)

  const quantidadeNecessaria = calculaIngressosEspetaculo(custo, valorIngresso)
  console.log(quantidadeNecessaria)
  

}

// EXERCÍCIO 08
function checaStringsMesmoTamanho(string1, string2) {

  return string1.length === string2.length

}

// EXERCÍCIO 09
function retornaPrimeiroElemento(array) {
  //const array1 = [array]

  return array[0]

}

// EXERCÍCIO 10
function retornaUltimoElemento(array) {

  return array [array.length - 1]

}

// EXERCÍCIO 11
function trocaPrimeiroEUltimo(array) {
  [array[0], array[array.length - 1]] = [array[array.length - 1], array[0]];
    return array

}

// EXERCÍCIO 12
function checaIgualdadeDesconsiderandoCase(string1, string2) {

  stringIguais = string1.toUpperCase() === string2.toUpperCase()

  return stringIguais

}

// EXERCÍCIO 13
function checaRenovacaoRG() {
  // Solicita ao usuário as informações necessárias
  let anoAtual = prompt("Digite o ano atual:");
  let anoNascimento = prompt("Digite o ano de nascimento:");
  let anoEmissaoRG = prompt("Digite o ano de emissão da carteira de identidade:");

  // Converte as entradas para números inteiros
  anoAtual = parseInt(anoAtual);
  anoNascimento = parseInt(anoNascimento);
  anoEmissaoRG = parseInt(anoEmissaoRG);

  // Calcula a idade da pessoa
  let idade = anoAtual - anoNascimento;

  // Calcula o tempo desde a emissão da carteira de identidade
  let tempoDesdeEmissao = anoAtual - anoEmissaoRG;

  // Verifica se a carteira precisa ser renovada
  let precisaRenovar = false;

  if ((idade <= 20 && tempoDesdeEmissao >= 5) || (idade === 20 && tempoDesdeEmissao === 5)) {
      precisaRenovar = true;
  } else if ((idade > 20 && idade <= 50 && tempoDesdeEmissao >= 10) || (idade === 50 && tempoDesdeEmissao === 10)) {
      precisaRenovar = true;
  } else if (idade > 50 && tempoDesdeEmissao >= 15) {
      precisaRenovar = true;
  }

  // Imprime o resultado no console
  console.log(precisaRenovar);

}

// EXERCÍCIO 14
function checaAnoBissexto(ano) {
  // Verifica se o ano é divisível por 4
    const divisivelPor4 = ano % 4 === 0;

    // Verifica se o ano é divisível por 100
    const divisivelPor100 = ano % 100 === 0;

    // Verifica se o ano é divisível por 400
    const divisivelPor400 = ano % 400 === 0;

    // Verifica as condições para ser bissexto
    return (divisivelPor4 && !divisivelPor100) || divisivelPor400;

}

// EXERCÍCIO 15
function checaValidadeInscricaoLabenu() {
  let respostaIdade = prompt("Você tem mais de 18(sim/nao)").toLowerCase()
  let respostaEnsinoMedio = prompt("Você possui ensino médio completo?(sim/nao)").toLowerCase()
  let respostaDisponibilidade = prompt("Você possui disponibilidade exclusica durante os horarios do curso?(sim/nao)").toLowerCase()

  let inscricaoValida = respostaIdade === "sim" && respostaEnsinoMedio ==="sim" && respostaDisponibilidade ==="sim"

  console.log(inscricaoValida)
}