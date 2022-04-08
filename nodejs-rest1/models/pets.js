const conexao = require('../infraestrutura/conexao')
const upload = require('../arquivos/upload.js')

class Pet {
    adiciona(pet, res) {
        const query = 'INSERT INTO Pets SET ?'

        upload(pet.imagem, pet.nome, (error, novoCaminho) => {
            if(error) {
                res.status(400).json({error})
            }else {const novoPet = {nome: pet.nome, imagem: novoCaminho}
            conexao.query(query, novoPet, error => {
            if(error) {
                console.log(error)
                res.status(400).json(error)
            }else {
                res.status(200).json(novoPet)
            }
        })}
            
        })

        
    }
}

module.exports = new Pet()