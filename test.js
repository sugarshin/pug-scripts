import { readFileSync } from 'fs'
import test from 'ava'
import pug from 'pug'

test('render scripts', t => {
  const actual = pug.compileFile('./fixtures/test.pug')({ data: require('./fixtures/data').data })
  t.deepEqual(actual, readFileSync('./fixtures/test.html', { encoding: 'utf8' }))
})
