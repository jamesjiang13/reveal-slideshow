import Reveal from 'reveal.js';
import Markdown from 'reveal.js/plugin/markdown/markdown.esm.js';

window.onload = () => {
  
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
          .addEventListener("click", () => {

            document.getElementById("start").classList.add("hide")
            document.getElementById("reveal")
                    .classList.remove("hide")

            let deck = new Reveal({
              plugins: [Markdown],
            });
            deck.initialize();

            showExit();
          });

  document.getElementById("exit")
          .addEventListener("click", () => {
            document.getElementById("reveal")
                    .classList.add("hide");
            
            hideExit();
          });
};
