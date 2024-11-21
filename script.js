const fotosDiv = document.getElementById('fotos');
let lastImage = null; // Última imagem exibida

// Função para buscar novas imagens
async function fetchNewImages() {
    try {
        const response = await fetch('http://localhost:5000/images'); // Lista de imagens no servidor
        const images = await response.json();

        if (images.length > 0 && images[0] !== lastImage) {
            // Se há uma nova imagem, atualiza a última exibida
            lastImage = images[0];
            addImageToPage(lastImage);
        }
    } catch (error) {
        console.error('Erro ao buscar imagens:', error);
    }
}

    


// Função para adicionar a imagem na página
function addImageToPage(imageFilename) {
    const polaroidDiv = document.createElement('div');
    polaroidDiv.className = 'polaroid';

    // Configura o caminho absoluto da imagem no sistema local
    const imgElement = document.createElement('img');
    imgElement.src = `C:\\Users\\Isadora\\Documents\\GitHub\\server\\${imageFilename}`;

    const caption = document.createElement('p');
    caption.textContent = 'A PolaPrint é uma câmera que ao captar imagens';

    polaroidDiv.appendChild(imgElement);
    polaroidDiv.appendChild(caption);

    // Adiciona no início do contêiner de imagens
    fotosDiv.prepend(polaroidDiv);
}


// Verifica novas imagens a cada 5 segundos
setInterval(fetchNewImages, 5000);

// Chama a função ao carregar a página
fetchNewImages();