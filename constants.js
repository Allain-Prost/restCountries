const chai = require('chai'),
assert = chai.assert

const statusCode = {
    ok: 200,
    notFound: 404
}

module.exports = {
    assert,
    statusCode
}