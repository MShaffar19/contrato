/*
 * Copyright 2017 resin.io
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *    http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

'use strict'

const ava = require('ava')
const utils = require('../../lib/utils')

ava.test('should return undefined given an empty set', (test) => {
  const set = new Set()
  test.deepEqual(utils.setFirst(set), undefined)
})

ava.test('should return the element given an empty set with one element', (test) => {
  const set = new Set([ 'foo' ])
  test.deepEqual(utils.setFirst(set), 'foo')
})

ava.test('should always return the only element', (test) => {
  const set = new Set([ 'foo' ])
  test.deepEqual(utils.setFirst(set), 'foo')
  test.deepEqual(utils.setFirst(set), 'foo')
  test.deepEqual(utils.setFirst(set), 'foo')
  test.deepEqual(utils.setFirst(set), 'foo')
})

ava.test('should return one of the elements given a set with more than one element', (test) => {
  const set = new Set([ 'foo', 'bar', 'baz' ])
  test.true(set.has(utils.setFirst(set)))
})
