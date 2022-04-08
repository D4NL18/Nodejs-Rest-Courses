class Tabelas {
    init(conexao) {
        this.conexao = conexao

        this.criarAtendimentos()
        this.criarPets()
    }

    criarAtendimentos() {

        const sql = 'CREATE TABLE IF NOT EXISTS Atendimentos (id int NOT NULL AUTO_INCREMENT, cliente varchar(50) NOT NULL, pet varchar(20), servico varchar(20) NOT NULL, status varchar(20) NOT NULL, observacoes text, data datetime NOT NULL, dataCriacao datetime NOT NULL,PRIMARY KEY(id))'

        this.conexao.query(sql, (error) => {
            if(error) {
                console.log(error)
            }else {
                console.log("tabela atendimentos criada com sucesso")
            }
        })
    }

    criarPets() {
        const query = 'CREATE TABLE IF NOT EXISTS Pets (id int NOT NULL AUTO_INCREMENT, nome varchar(50), imagem varchar(200), PRIMARY KEY (id))'

        this.conexao.query(query, error => {
            if(error) {
                console.log(error)
            }else {
                console.log('Tabela Pets criada com sucesso')
            }
        })
    }

}

module.exports = new Tabelas