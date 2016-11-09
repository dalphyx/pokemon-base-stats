# pokemon-base-stats

[![Build Status](https://travis-ci.org/dalphyx/pokemon-base-stats.svg?branch=master)](https://travis-ci.org/dalphyx/pokemon-base-stats) [![npm package](https://img.shields.io/npm/v/pokemon-base-stats.svg)](https://www.npmjs.com/package/pokemon-base-stats)

> Get [Pokémon](https://en.wikipedia.org/wiki/Pok%C3%A9mon) base stats

The stats is returned as array like [HP, Attack, Defense, Sp.Attack, Sp.Defense, Speed].



## Install

```
$ npm install --save pokemon-base-stats
```



## Usage

```js
const baseStats = require('pokemon-base-stats')

baseStats.getById({ id: 6 })
// => [78, 84, 78, 109, 85, 100]

baseStats.getById({ id: 6, forme: 'megaX' })
// => [78, 130, 111, 130, 85, 100]

baseStats.getByName({ name: 'Charizard' })
// => [78, 84, 78, 109, 85, 100]

baseStats.getByName({ name: 'Charizard', forme: 'megaX' })
// => [78, 130, 111, 130, 85, 100]

baseStats.getByName({ name: '喷火龙', lang: 'zh-Hans' })
// => [78, 84, 78, 109, 85, 100]

baseStats.getByName({ name: '喷火龙', forme: 'megaX', lang: 'zh-Hans' })
// => [78, 130, 111, 130, 85, 100]

baseStats.getFormes({ name: 'Charizard' })
// => ['base', 'megaY', 'megaX']

baseStats.getFormes({ name: '胡帕', lang: 'zh-Hant' })
// => ['confined', 'unbound']

baseStats.getFormes({ id: 720 })
// => ['confined', 'unbound']
```


## API

### getById: { id, forme, lang = 'en' }

### getByName: { name, forme, lang = 'en' }

### getFormes: { id, name, lang = 'en' }


## Supported languages

As it use [pokemon](https://github.com/sindresorhus/pokemon) under the hood, so do as the [pokemon](https://github.com/sindresorhus/pokemon) do:

- `de` (German)
- `en` (English)
- `fr` (French)
- `ja` (Japanese)
- `ko` (Korean)
- `ru` (Russian)
- `zh-Hans` (Simplified Chinese)
- `zh-Hant` (Traditional Chinese)

## License

MIT © [dalphyx](https://github.com/dalphyx)





