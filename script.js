// Array de frases
var frases = [
    "Oieeeeeeee",
    "Estava fazendo programa e pensei",
    "Por que eu não faço algo fofo?",
    "Embora eu fique assim quando faço",
    "Eu fiz mesmo assim",
];
// Array de imagens
var imagens = [
    "imgs/hellokittynerd.png",
    "imgs/hellokittyprograma.png",
    "imgs/hellokittypensando.png",
    "imgs/hellokittyvomito.png",
    "imgs/gatinhos.png",
];

// Pegando os elementos do DOM
var fraseElement = document.getElementById("frase");
var imagemElement = document.getElementById("imagem");
var perguntaContainer = document.getElementById("pergunta-container");
var simButton = document.getElementById("sim");
var naoButton = document.getElementById("nao");

// Variável para o índice da frase e da imagem
var indice = 0;

// Função para mostrar a frase e a imagem
// Função para mostrar a frase e a imagem
// Função para mostrar a frase e a imagem
function mostrarFraseImagem() {
    // Exibir a frase
    fraseElement.textContent = frases[indice];
    // Exibir a imagem
    imagemElement.src = imagens[indice];
    // Aumentar o índice para a próxima frase e imagem
    indice++;

    // Se atingiu o final das frases, ainda exibe a última frase por 5 segundos
    if (indice >= frases.length) {
        setTimeout(function() {
            fraseElement.style.display = "none";  // Frase oculta
            imagemElement.style.display = "none"; // Imagem oculta
            // Mostrar a pergunta após todas as frases e imagens
            mostrarPergunta();
        }, 5000); 
    //}, 50); 
    }
}

// Função para mostrar a pergunta
function mostrarPergunta() {
    perguntaContainer.style.display = "block";  // Mostrar a pergunta
}

// Exibir a primeira frase e imagem imediatamente
mostrarFraseImagem();

// Mudar a frase e a imagem a cada 5 segundos até que todas sejam exibidas
setInterval(function() {
    if (indice < frases.length) {
        mostrarFraseImagem();
    }
}, 5000);
//}, 50);

// Quando o botão "Sim" for clicado, continuar exibindo frases e imagens
simButton.addEventListener("click", function () {
    perguntaContainer.style.display = "none";  // Esconder a pergunta
    // Reiniciar o índice e começar de novo, se desejar
    indice = 0;
    mostrarFraseImagem(); // Mostrar imediatamente a próxima frase

    // Redirecionar para o outro index.html
    window.location.href = "/projetinho/cartinha/src/index.html";
});

// Pegando o elemento da imagem de raiva
var imagemRaiva = document.createElement("img");
imagemRaiva.src = "imgs/hellokittyraiva.png";  // Caminho da imagem de raiva
imagemRaiva.alt = "Imagem de Raiva";
imagemRaiva.width = 300;  // Definindo o tamanho da imagem
imagemRaiva.style.display = "none";  // Inicialmente escondida
document.body.appendChild(imagemRaiva);  // Adiciona a imagem ao corpo da página

// Quando o botão "Não" for clicado
// Pegando os elementos do DOM
var perguntaContainer = document.getElementById("pergunta-container");
var imagemRaiva = document.getElementById("imagemRaiva");
var simButton = document.getElementById("sim");
var naoButton = document.getElementById("nao");

// Quando o botão "Não" for clicado
naoButton.addEventListener("click", function () {
    // Esconder a pergunta
    perguntaContainer.style.display = "none";
    // Mostrar a imagem de raiva
    imagemRaiva.style.display = "block";
    
    // Alterar o plano de fundo para a imagem glitch.png
    document.body.style.backgroundImage = "url('imgs/glitch.png')";
    document.body.style.backgroundSize = "cover"; // Ajusta a imagem para cobrir o fundo
    document.body.style.backgroundPosition = "center"; // Centraliza a imagem de fundo
    document.body.style.backgroundRepeat = "no-repeat"; // Impede a repetição da imagem de fundo

    // Após 10 segundos, esconder a imagem e restaurar o fundo normal
    setTimeout(function () {
        imagemRaiva.style.display = "none"; // Esconder a imagem de raiva
        perguntaContainer.style.display = "block"; // Mostrar a pergunta novamente

        // Restaurar o plano de fundo original
        document.body.style.backgroundImage = ""; // Limpa a imagem de fundo
    }, 1000); // 10000ms = 10 segundos
});


