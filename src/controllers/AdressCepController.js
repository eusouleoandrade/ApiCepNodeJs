// Importa axios
const axios = require('axios');

module.exports = {
    async show(request, response){
        console.log(request);

        return response.json('Olá');
    },
};