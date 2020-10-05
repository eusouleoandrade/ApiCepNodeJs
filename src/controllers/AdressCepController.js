// Importa axios
const axios = require('axios');

module.exports = {
    async show(request, response) {
        const { cep } = request.query;

        if (cep == null || cep == "") {
            return response.json({ 'exception': 'CEP não informado' })
        };

        const apiCepResponse = await axios.get(`https://viacep.com.br/ws/${cep}/json/`);
        
        return response.json(apiCepResponse.data);
    },
};