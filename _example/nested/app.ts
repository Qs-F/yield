import * as riot from 'riot'

import yf from '../../src/yield.ts'

import Test from './test.riot'
import Inject from './test-inject.riot'

riot.install(yf)

riot.register('test-riot', Test)
riot.mount('test-riot')
riot.register('test-inject', Inject)
riot.mount('test-inject')
