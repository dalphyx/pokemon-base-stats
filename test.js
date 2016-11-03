import test from 'ava'
import main from './'

let baseStats = [78, 84, 78, 109, 85, 100]
let megaStats = [78, 130, 111, 130, 85, 100]
let charizardFormes = ['base', 'megaY', 'megaX']
let hoopaFormes = ['confined', 'unbound']

test('Get stats by IDs', t => {
  t.deepEqual(main.getById({ id: 6 }), baseStats)
  t.deepEqual(main.getById({ id: 6, lang: 'ja' }), baseStats)
  t.deepEqual(main.getById({ id: 6, forme: 'megaX' }), megaStats)
  t.deepEqual(main.getById({ id: 6, forme: 'megaX', lang: 'zh-Hans' }), megaStats)
  t.deepEqual(main.getById({ id: 6, forme: 'megaX', lang: 'de' }), megaStats)
})

test('Get stats by Names', t => {
  t.deepEqual(main.getByName({ name: 'Charizard' }), baseStats)
  t.deepEqual(main.getByName({ name: 'Чаризард', lang: 'ru' }), baseStats)
  t.deepEqual(main.getByName({ name: '喷火龙',    lang: 'zh-Hans' }), baseStats)
  t.deepEqual(main.getByName({ name: 'Charizard', forme: 'megaX' }), megaStats)
  t.deepEqual(main.getByName({ name: '喷火龙',     forme: 'megaX', lang: 'zh-Hans' }), megaStats)
  t.deepEqual(main.getByName({ name: 'Dracaufeu', forme: 'megaX', lang: 'fr' }), megaStats)
})

test ('Get formes', t => {
  t.deepEqual(main.getFormes({ name: 'Charizard' }), charizardFormes)
  t.deepEqual(main.getFormes({ name: 'Чаризард', lang: 'ru' }), charizardFormes)
  t.deepEqual(main.getFormes({ id: 6 }), charizardFormes)
  t.deepEqual(main.getFormes({ name: 'Hoopa' }), hoopaFormes)
  t.deepEqual(main.getFormes({ name: '胡帕', lang: 'zh-Hant' }), hoopaFormes)
  t.deepEqual(main.getFormes({ id: 720}), hoopaFormes)
})
