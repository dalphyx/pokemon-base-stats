import test from 'ava'
import main from './'

let baseStats = [78, 84, 78, 109, 85, 100]
let megaStats = [78, 130, 111, 130, 85, 100]

test('Get stats by IDs', t => {
  t.deepEqual(main.getById({ id: 6 }), baseStats)
  t.deepEqual(main.getById({ id: 6, forme: 'megaX' }), megaStats)
  t.deepEqual(main.getById({ id: 6, forme: 'megaX', lang: 'zh-Hans' }), megaStats)
})

test('Get stats by Names', t => {
  t.deepEqual(main.getByName({ name: 'Charizard' }), baseStats)
  t.deepEqual(main.getByName({ name: 'Charizard', forme: 'megaX' }), megaStats)
  t.deepEqual(main.getByName({ name: '喷火龙', lang: 'zh-Hans' }), baseStats)
  t.deepEqual(main.getByName({ name: '喷火龙', forme: 'megaX', lang: 'zh-Hans' }), megaStats)
})
