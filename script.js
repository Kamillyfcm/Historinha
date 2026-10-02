const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
{
    enunciado: "Assim que Elfhaba entra na escola, as pessoas possuem uma reação espantosa",
    alternativas: [
        "Que deslumbrante!",
        "Ela é verde? Isso é horripilante"
    ]
},
        {
    enunciado: "Ela pensa que não se importa com nenhum tipo de comentário, você ajuda ela?",
    alternativas: [
        "Sim",
        "Não"
    ]
},

{
    enunciado: "Pergunta 1",
    alternativas: [
        "Alternativa 1",
        "Aternativa 2"
    ]
},

{
    enunciado: "Pergunta 1",
    alternativas: [
        "Alternativa 1",
        "Aternativa 2"
    ]
},
       

];

let atual = 0;
let perguntaAtual;

function mostraPergunta () {}