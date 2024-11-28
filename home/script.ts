// Array de frases
const frases = [
  "Primeira frase!",
  "Segunda frase!",
  "Terceira frase!",
  "Quarta frase!",
  "Quinta frase!",
  "Sexta frase!"
];

// Array de imagens
const imagens = [
  "imgs/gatinhos.png",
  "imgs/image2.jpg",
  "imgs/image3.jpg",
  "imgs/image4.jpg",
  "imgs/image5.jpg",
  "imgs/image6.jpg"
];

// Pegando os elementos do DOM
const fraseElement = document.getElementById("frase") as HTMLParagraphElement;
const imagemElement = document.getElementById("imagem") as HTMLImageElement;
const perguntaContainer = document.getElementById("pergunta-container") as HTMLDivElement;
const simButton = document.getElementById("sim") as HTMLButtonElement;
const naoButton = document.getElementById("nao") as HTMLButtonElement;

// Variável para o índice da frase e da imagem
let indice = 0;

// Função para mostrar a frase e a imagem
function mostrarFraseImagem() {
  // Exibir a frase
  fraseElement.textContent = frases[indice];
  
  // Exibir a imagem
  imagemElement.src = imagens[indice];
  
  // Aumentar o índice para a próxima frase e imagem, ou reiniciar se chegar ao final
  indice = (indice + 1) % frases.length;
}

// Função para mostrar a pergunta
function mostrarPergunta() {
  perguntaContainer.style.display = "block";
}

// Exibir a primeira frase e imagem imediatamente
mostrarFraseImagem();

// Mudar a frase e a imagem a cada 5 segundos
setInterval(mostrarFraseImagem, 5000);

// Quando o botão "Sim" for clicado, continuar exibindo frases e imagens
simButton.addEventListener("click", () => {
  perguntaContainer.style.display = "none";
  mostrarFraseImagem();  // Mostrar imediatamente a próxima frase
});

// Quando o botão "Não" for clicado, parar a troca de frases
naoButton.addEventListener("click", () => {
  perguntaContainer.style.display = "none";
});
