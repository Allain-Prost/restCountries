const { assert, statusCode } = require("../../constants"),
    { countrys } = require("../../data/countrys.data"),
    { getCountryByName } = require("../../service/getCountryByName.endpoint")

it('[TC-01] - Buscar país pelo nome correto', async () => {
    let { json } = await getCountryByName(countrys.brazil, statusCode.ok)
    assert.equal(json[0].name.common, 'Brazil')
    assert.equal(json[0].name.official, 'Federative Republic of Brazil')
    assert.equal(json[0].name.nativeName.por.official, 'República Federativa do Brasil')
    assert.equal(json[0].name.nativeName.por.common, 'Brasil')
})

it('[TC-02] - Buscar país pelo nome incorreto', async () => {
    let { json } = await getCountryByName(countrys.argentina, statusCode.notFound)
    assert.equal(json.status, '404')
    assert.equal(json.message, 'Not Found')
})