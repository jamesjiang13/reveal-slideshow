import Reveal from 'reveal.js';
import Markdown from 'reveal.js/plugin/markdown/markdown.esm.js';
import './stylesheets/reset.css';
import './stylesheets/index.css';

window.onload = () => {
  
  function showExit() {
    let element = document.getElementById("exit");
    element.classList = "";
    element.classList.add("show-exit");
  }

  function hideExit() {
    let element = document.getElementById("exit");
    element.classList = "";
    element.classList.add("hide-exit");
  }

  document.getElementById("start-btn")
          .addEventListener("click", () => {

            document.getElementById("start-container").classList.add("hide")
            document.getElementById("reveal").classList.remove("hide")

            let deck = new Reveal({
              plugins: [Markdown],
            });
            deck.initialize();

            showExit();
          });

  document.getElementById("exit")
          .addEventListener("click", () => {

            document.getElementById("reveal").classList.add("hide");
            document.getElementById("start-container").classList.remove("hide")
            document.getElementById("body").classList.remove("reveal-viewport")
            
            hideExit();
          });
};
