const pokemon = require('pokemon')
const data = require('./data/data')

function getResult (o, id, name, forme) {
  if (forme && forme != 'base') {
    if (!o.otherForme || !o.otherForme[forme]) {
      throw new Error(`No.${id} ${name} does not have '${forme}' forme.`)
    }

    return o.otherForme[forme]
  }

  if (!('base' in o)) {
    throw new Error(`No.${id} ${name} does not have base forme.`)
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

function getFormes ({ id, name, lang = 'en'} = {}) {
  if (!id) {
    id = pokemon.getId(name, lang)
  } else {
    // check pokemon exists
    pokemon.getName(id, lang)
  }

  let o = data(lang)[id - 1]
  formes = 'base' in o ? [ 'base' ] : []
  if ('otherForme' in o) {
    formes = formes.concat(Object.keys(o.otherForme))
  }
  return formes
}

exports.getById = getById
exports.getByName = getByName
exports.getFormes = getFormes
