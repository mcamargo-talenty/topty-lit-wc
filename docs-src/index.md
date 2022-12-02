---
layout: page.11ty.cjs
title: <my-lit-component> ⌲ Home
---

# &lt;my-lit-component>

`<my-lit-component>` is an awesome element. It's a great introduction to building web components with LitElement, with nice documentation site as well.

## As easy as HTML

<section class="columns">
  <div>

`<my-lit-component>` is just an HTML element. You can it anywhere you can use HTML!

```html
<my-lit-component></my-lit-component>
```

  </div>
  <div>

<my-lit-component></my-lit-component>

  </div>
</section>

## Configure with attributes

<section class="columns">
  <div>

`<my-lit-component>` can be configured with attributed in plain HTML.

```html
<my-lit-component name="HTML"></my-lit-component>
```

  </div>
  <div>

<my-lit-component name="HTML"></my-lit-component>

  </div>
</section>

## Declarative rendering

<section class="columns">
  <div>

`<my-lit-component>` can be used with declarative rendering libraries like Angular, React, Vue, and lit-html

```js
import {html, render} from 'lit-html';

const name = 'lit-html';

render(
  html`
    <h2>This is a &lt;my-lit-component&gt;</h2>
    <my-lit-component .name=${name}></my-lit-component>
  `,
  document.body
);
```

  </div>
  <div>

<h2>This is a &lt;my-lit-component&gt;</h2>
<my-lit-component name="lit-html"></my-lit-component>

  </div>
</section>
