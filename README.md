# pkg `yield`

`yield` is a complement patch for `Riot.js v4` which lacks some of the features implemented with `<yield />` in `Riot.js v3`.

[![Actions Status](https://github.com/Qs-F/yield/workflows/Build/badge.svg)](https://github.com/Qs-F/yield/actions)

## Installation

For npm user,

`$ npm install @creatorqsf/yield`

For yarn user,

`$ yarn add @creatorqsf/yield`

## Usage

In your bundle file (like `app.js`) which register riot component or mount them, add some following lines.

```js
import yf from '@creatorqsf/yield'

riot.install(yf)
```

Then in your component file (like `my-tag.riot`), write `<yield />` whereever you want it.

```riot
<my-tag>
  <some-tag-even-nested>
    <yield />
  </some-tag-even-nested>
</my-tag>
```

A simple nested example is in `_example/nested` directly. You can play with it by `$ ./run.sh`.

## Motivation and Issues of Riot v4

See these two issues:

[Riot v4 inserts elements which exists in pre-mounted element without <slot /> · Issue #2773 · riot/riot](https://github.com/riot/riot/issues/2773)

[Riot v4 inserts the elements not in <slot /> · Issue #2774 · riot/riot](https://github.com/riot/riot/issues/2774)

## Author

[たふみ(CreatorQsF)](https://github.com/Qs-F)

## License

MIT
