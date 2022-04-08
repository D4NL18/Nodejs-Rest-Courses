const fs = require('fs')
const path = require('path')

// fs.readFile('./nodejs-rest1/assets/beagle.jpg', (error, buffer) => {
//     console.log("imagem foi bufferizada")

//     fs.writeFile('./nodejs-rest1/assets/beagle2.jpg', buffer, (error) => {
//         console.log('imagem escrita')
//     })

// })

// fs.createReadStream('./nodejs-rest1/assets/beagle.jpg')
//     .pipe(fs.createWriteStream('./nodejs-rest1/assets/beagle3.jpg'))
//     .on('finish', () => console.log('imagem escrita'))

module.exports = (caminho, nomeDoArquivo, callbackImagemCriada) => {

    const tiposValidos = ['jpg', 'png', 'jpeg']
    const tipo = path.extname(caminho)
    const tipoEhValido = tiposValidos.indexOf(tipo.substring(1)) !== -1
    const novoCaminho = `./assets/img/${nomeDoArquivo}${tipo}`

    if(!tipoEhValido) {
        const error = 'Tipo inválido'
        console.log('Tipo inválido')
        callbackImagemCriada(error)
    }else {
    fs.createReadStream(caminho)
    .pipe(fs.createWriteStream(novoCaminho))
    .on('finish', () => callbackImagemCriada(false, novoCaminho))
    }
}

