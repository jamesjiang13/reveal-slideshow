import Reveal from 'reveal.js';
import Markdown from 'reveal.js/plugin/markdown/markdown.esm.js';

// function component() {
//   const element = document.createElement('div');
//   element.innerHTML = 'Hello webpack';
//   return element;
// }

// document.body.appendChild(component());

let deck = new Reveal({
  plugins: [Markdown],
})

deck.initialize();
