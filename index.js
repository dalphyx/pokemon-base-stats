const pokemon = require('pokemon')
const data = require('./data/data')

function getResult (o, id, name, forme) {
  if (!('base' in o)) {
    throw new Error(`No.${id} ${name} does not have normal forme.`)
  }

  if (forme) {
    if (!o.otherForme || !o.otherForme[forme]) {
      throw new Error(`No.${id} ${name} does not have '${forme}' forme.`)
    }

    return o.otherForme[forme]
  }

  return o.base
}

function getById ({ id, forme, lang = 'en' } = {}) {
  let o = data(lang)[id - 1]
  let name = pokemon.getName(id, lang)

  return getResult(o, id, name, forme)
}

function getByName ({ name, forme, lang = 'en' } = {}) {
  let id = pokemon.getId(name, lang)
  let o = data(lang)[id - 1]

  return getResult(o, id, name, forme)
}

exports.getById = getById
exports.getByName = getByName
