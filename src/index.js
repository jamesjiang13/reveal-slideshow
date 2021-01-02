import Reveal from 'reveal.js';
import Markdown from 'reveal.js/plugin/markdown/markdown.esm.js';
import './stylesheets/reset.css';
import './stylesheets/index.css';

window.onload = () => {
  
  function showNav() {
    let exitBtn = document.getElementById("slide-nav");
    exitBtn.classList = "";
    exitBtn.classList.add("show-nav");
  }

  function hideNav() {
   let exitBtn = document.getElementById("slide-nav");
    exitBtn.classList = "";
    exitBtn.classList.add("hide-nav");
  }

  document.getElementById("start-btn")
          .addEventListener("click", () => {

            document.getElementById("start-page-container").classList.add("hide")
            document.getElementById("reveal").classList.remove("hide")

            let deck = new Reveal({
              plugins: [Markdown],
            });
            deck.initialize();

            showNav();
          });

  document.getElementById("exit")
          .addEventListener("click", () => {

            document.getElementById("reveal").classList.add("hide");
            document.getElementById("start-page-container").classList.remove("hide")
            document.getElementById("body").classList.remove("reveal-viewport")
            
            hideNav();
          });

  // document.getElementById("first-slide")
  //         .addEventListener("click", () => {
            
  //         })
};
