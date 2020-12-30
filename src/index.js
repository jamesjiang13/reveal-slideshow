import Reveal from 'reveal.js';
import Markdown from 'reveal.js/plugin/markdown/markdown.esm.js';
// import styles from './stylesheets/index.modules.css';

// function component() {
//   const element = document.createElement('div');
//   element.innerHTML = 'Hello webpack';
//   return element;
// }

// document.body.appendChild(component());

window.onload = () => {
  let slideshow = false;

  function startDeck() {
    let deck = new Reveal({
      plugins: [Markdown],
    });

    slideshow = true;
    deck.initialize();
  }
  
  function showExit() {
    var element = document.getElementById("exit");
    element.classList = "";
    element.classList.add("show-exit");
  }

  function hideExit() {
    var element = document.getElementById("exit");
    element.classList = "";
    element.classList.add("hide-exit");
  }
  

  document.getElementById("start")
          .addEventListener("click", () => startDeck());

  if (slideshow) {
    showExit();
  } else {
    hideExit();
  }

};

