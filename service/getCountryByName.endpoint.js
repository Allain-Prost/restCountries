const { spec } = require("pactum");

async function getCountryByName(name){
    return await spec()
        .get(`https://restcountries.com/v3.1/name/${name}`)
        .expectStatus(200)
}

module.exports = {
    getCountryByName
}