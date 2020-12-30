import Reveal from 'reveal.js';
import Markdown from 'reveal.js/plugin/markdown/markdown.esm.js';

window.onload = () => {
  let slideshow = false;

  function startDeck() {
    let deck = new Reveal({
      plugins: [Markdown],
    });

    slideshow = true;
    deck.initialize();
    showExit();
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

  (slideshow ? showExit() : hideExit())

};

