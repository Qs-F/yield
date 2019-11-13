import * as riot from 'riot'

import TT from './test2.riot'
import TC from './test2-child.riot'

riot.register('test-riot', TT)
riot.register('test-child', TC)
riot.mount('test-riot')
riot.mount('test-child')
