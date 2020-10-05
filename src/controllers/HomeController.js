const { show } = require("./AdressCepController");

module.exports = {
    async show(request, response) {
        return response.json({message: 'Bem-vindo a API Cep Nodejs.'})
    }
}