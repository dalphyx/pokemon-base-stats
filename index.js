const pokemon = require('pokemon')
const loadData = require('./data/data').loadData

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
  const statsData = loadData(lang)
  let o = statsData[id - 1]
  let name = pokemon.getName(id, lang)

  return getResult(o, id, name, forme)
}

function getByName ({ name, forme, lang = 'en' } = {}) {
  const statsData = loadData(lang)
  let id = pokemon.getId(name, lang)
  let o = statsData[id - 1]

  return getResult(o, id, name, forme)
}

exports.getById = getById
exports.getByName = getByName
