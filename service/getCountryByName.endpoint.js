const { spec } = require("pactum");

async function getCountryByName(name,status){
    return await spec()
        .get(`https://restcountries.com/v3.1/name/${name}`)
        .expectStatus(status)
}

module.exports = {
    getCountryByName
}