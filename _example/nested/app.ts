import * as riot from 'riot'

import yield from '../../src/yield.ts'

import Test from './test.riot'
import Inject from './test-inject.riot'

riot.install(yield)

riot.register('test-riot', Test)
riot.mount('test-riot')
riot.register('test-inject', Inject)
riot.mount('test-inject')
