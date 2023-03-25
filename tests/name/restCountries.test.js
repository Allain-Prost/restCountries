const { assert } = require("../../constants"),
    { countrys } = require("../../data/countrys.data"),
    { getCountryByName } = require("../../service/getCountryByName.endpoint")

it('[TC-01]-Buscar país pelo nome', async () => {
    let { json } = await getCountryByName('cearaa')
    assert.equal(json[0].name.common, 'Brazil')
    assert.equal(json[0].name.official, 'Federative Republic of Brazil')
    assert.equal(json[0].name.nativeName.por.official, 'República Federativa do Brasil')
    assert.equal(json[0].name.nativeName.por.common, 'Brasil')
})