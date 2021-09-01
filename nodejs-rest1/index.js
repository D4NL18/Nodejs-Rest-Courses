const customExpress = require('./config/customExpress')

const conexao = require('./infraestrutura/conexao')

const Tabelas = require('./infraestrutura/tabelas')

conexao.connect((error) => {
    if(error) {
        console.log(error)
    }else {
        Tabelas.init(conexao) 
        console.log("executado com sucesso")
    }
})

const app = customExpress()

app.listen(3000, () => console.log('servidor rodando na porta 3000'))

