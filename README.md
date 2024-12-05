<h1>POLAPRINT</h1>

<p>A PolaPrint é uma câmera que ao captar imagens, identifica seus elementos com inteligência artificial e imprime uma breve descrição ou um poema do que contém na foto tirada por meio de uma pequena impressora térmica diretamente ligada ao dispositivo. O projeto foi desenvolvido com o objetivo de desafiar nós estudantes de programação e expor nossos resultados na feira experimental do Senac Distrito Criativo.</p>

<img src='https://i.imgur.com/i9lRBaQ.jpeg'>

<p>A ideia da PolaPrint foi adaptar um projeto apresentado no HACKDAY chamado Poetroid, que consiste em um sistema inspirado na polaroid,
porém no lugar das fotos, o equipamento imprime poemas relacionados a foto tirada.</p>
<p>Para o funcionamento da Polaprint foi utilizado apenas o Circuit Python na ESP32-S3 e alguns pacotes gratuitos, diferentemente da Poetroid que fez uso de materiais
muito mais complexos. Isso acabou nos gerando diversas limitações, aumentando ainda mais o desafio, mas também nos impedindo de fazer uma reprodução exata do dispositivo original.</p>

<h3>Materiais utilizados:</h3>
<ul>
    <li>ESP32-S3 (microcontrolador);</li>
    <li>Notebook (servidor);</li>
    <li>PowerBank;</li>
    <li>Câmera;</li>
    <li>Impressora Térmica;</li>
    <li>Interruptor;</li>
    <li>Ferro de Solda;</li>
</ul>

<h3>Funcionamento:</h3>
<ol>
    <li>Ao pressionar o interruptor, o dispositivo ESP32-S3 tira uma foto;</li>
    <li>Após isso, irá enviar a imagem para o servidor;</li>
    <li>O servidor irá utilizar inteligência artificial para reconhecer os elementos presentes na imagem;</li>
    <li>A inteligência artificial realizará uma breve descrição a partir das palavras reconhecidas;</li>
    <li>a descrição será filtrada em palavras chave e relacionadas com poemas contidos em um banco de dados;</li>
    <li>Caso não haja poemas sobre o tema, o servidor retornará a descrição gerada para o servidor, caso haja, o servidor retornará o poema selecionado;</li>
    <li>A resposta recebida será enviada para o sistema do microcontrolador ESP32-23;</li>
    <li>O dispositivo enviará instruções à impressora térmica para imprimir resposta;</li>
</ol>

<h3>Bibliotecas:</h3>
<p>OpenCV: É uma ferramenta de visão computacional e processamento de imagens, sua função no nosso projeto é realizar operações de leitura de imagens, sendo a responsável por desenvolver a descrição de imagens de maneira automática. Apesar que não ser diretamente treinada por Machine Learning, a OpenCV utiliza modelos e algoritmos que foram previamente treinados ou funcionam com base em técnicas matemáticas e estatísticas para realizar tarefas de reconhecimento e processamento de imagens.</p>
<p>Transformers: Desenvolvida pela hugging Face, a bilbioteca possui a fução de acessar modelos que foram treinados em grandes volumes de dados para resolver tarefas. Esses modelos podem ser usados para uma grande quantidade de aplicações sem a necessidade de treinamento do zero. No nosso codigo, a Transformers interage com a OpenCV para o reconhecimento de imagens e elaboramento das descrições.</p>

<img src='https://i.imgur.com/mXv9tSQ.png' width='40%'>

<h3>Conclusão:</h3>

<p>A comunicação entre o microcontrolador ESP32-S3, o servidor e a impressora térmica foi bem-sucedida,  mostrando que o PolaPrint está operando conforme esperado. Com o fluxo de captura de imagem, reconhecimento de elementos via inteligência artificial e impressão automática da descrição da imagem funcionando integramente.</p>
<p>Nosso experimento oferece acessibilidade e inovação de forma automatizada, expandindo as possibilidades de interação entre programação, eletrônica e comunicação.</p>

<h3>Integrantes:</h3>
<ul>
    <li><a href="https://github.com/InvaderKrm">Isadora Kramm</a></li>
    <li><a href="https://github.com/therabb1t">Ana Castro</a></li>
    <li><a href="https://github.com/Lord7290">Leonardo Kalil</a></li>
</ul>
<img src='https://i.imgur.com/ZzYQmKz.png'>


