const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
{
    enunciado: "Assim que Elfhaba entra na escola, as pessoas possuem uma reação espantosa",
    alternativas: [
        {
        texto:"Que deslumbrante!",
        afirmacao:"afirmacao"
        },
        {
        texto:"Ela é verde? Isso é horripilante",
        afirmacao:"afirmacao"

        }
    ]
},
        {
    enunciado: "Ela pensa que não se importa com nenhum tipo de comentário, você ajuda ela?",
    alternativas: [
        {
        texto:"Sim",
        afirmacao:"afirmacao"
        },
        {
        texto:"Não",
        afirmacao:"afirmacao"

        }
    ]
},

{
    enunciado: "Pergunta 3",
    alternativas: [
        {
        texto:"Com certeza!",
        afirmacao:"afirmacao"
        },
        {
        texto:"Claro que não!",
        afirmacao:"afirmacao"

        }
    ]
},

{
    enunciado: "Pergunta 4",
    alternativas: [
        {
        texto:"Sim!",
        afirmacao:"afirmacao"
        },
        {
        texto:"NUNCA!",
        afirmacao:"afirmacao"

        }
    ]
},

{
    enunciado: "Pergunta 5",
    alternativas: [
        {
        texto:"Que deslumbrante!",
        afirmacao:"afirmacao"
        },
        {
        texto:"Isso é horripilante",
        afirmacao:"afirmacao"

        }
    ]
},
       
];

let atual = 0;
let perguntaAtual;

function mostraPergunta () {
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    mostraAlternativas();
}

function mostraAlternativas(){
    for(const alternativa of perguntaAtual.alternativas) {
        const botaoAlternativa = document.createElement("button");
        botaoAlternativa.textContent = alternativa.texto;
        botaoAlternativa.addEventListener("click", function(){
            atual++,
            mostraPergunta();
        })
        caixaAlternativas.appendChild(botaoAlternativa);
    }
}

mostraPergunta();