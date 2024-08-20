from flask import Flask, request
import base64
import os
from datetime import datetime
from seeImage import le_imagem


def get_timestamp():
    """ Retorna a data e hora atual formatada como dd-mm-aaaa hh-mm-ss """
    now = datetime.now()
    return now.strftime("%d-%m-%Y %H-%M-%S")

app = Flask(__name__)

@app.route('/upload', methods=['POST'])
def upload_image():
    data = request.data
    with open("received_image.jpg", "wb") as file:
        file.write(base64.b64decode(data))
    filename = "imagem"+get_timestamp()+".jpg"
    os.rename("received_image.jpg",filename)
    txt = le_imagem(filename)
    return txt, 200

if __name__ == "__main__":
    app.run(host='0.0.0.0', port=5000)
