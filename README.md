<h1>POLAPRINT</h1>

<p>A PolaPrint é uma câmera que ao captar imagens, identifica seus elementos com inteligência artificial e imprime uma breve descrição do que contém na foto tirada por meio de uma pequena impressora térmica diretamente ligada ao dispositivo. O projeto foi desenvolvido com o objetivo de desafiar nós estudantes de programação e expor nossos resultados na feira experimental do Senac Distrito Criativo.</p>

<img src='https://i.imgur.com/i9lRBaQ.jpeg'>

<p>A ideia da PolaPrint foi adaptar um projeto apresentado no HACKDAY chamado Poetroid, que consiste em um sistema inspirado na polaroid,
porém no lugar das fotos, o equipamento imprime poemas relacionados a foto tirada.</p>
<p>Para o funcionamento da Polaprint foi utilizado apenas o Circuit Python na ESP-32-S3 e alguns pacotes gratuitos, diferentemente da Poetroid que fez uso de materiais
muito mais complexos. Isso acabou nos gerando diversas limitações, aumentando ainda mais o desafio, mas também nos impedindo de fazer uma reprodução exata do dispositivo original.</p>

<h3>Materiais utilizados:</h3>
<ul>
    <li>ESP-32-S3 Eye (microcontrolador e câmera);</li>
    <li>Notebook (servidor);</li>
    <li>PowerBank;</li>
    <li>Impressora Térmica;</li>
    <li>Interruptor;</li>
    <li>Ferro de Solda;</li>
</ul>

<h3>Funcionamento:</h3>
<ol>
    <li>Ao pressionar o interruptor, o dispositivo ESP-32-S3 eye tira uma foto;</li>
    <li>Após isso, irá enviar a imagem para o servidor;</li>
    <li>O servidor irá utilizar inteligência artificial para reconhecer os elementos presentes na imagem;</li>
    <li>A inteligência artificial realizará uma breve descrição a partir das palavras reconhecidas;</li>
    <li>O servidor retornará a descrição gerada para o dispositivo ESP-32-23;</li>
    <li>O dispositivo enviará instruções à impressora térmica para imprimir a descrição da imagem;</li>
</ol>

<img src='https://i.imgur.com/QppWBej.jpeg'>



