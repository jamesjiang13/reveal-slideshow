import Reveal from 'reveal.js';
import Markdown from 'reveal.js/plugin/markdown/markdown.esm.js';

import './stylesheets/reset.css';
import './stylesheets/reveal.css';
import './stylesheets/moon.css';
import './stylesheets/index.css';

Element.prototype.remove = function() {
  this.parentElement.removeChild(this);
}
NodeList.prototype.remove = HTMLCollection.prototype.remove = function() {
  for(var i = this.length - 1; i >= 0; i--) {
    if(this[i] && this[i].parentElement) {
      this[i].parentElement.removeChild(this[i]);
    }
  }
}

window.onload = () => {
  
  function showNav() {
    let navContainer = document.getElementById("slide-nav");
    navContainer.classList = "";
    navContainer.classList.add("show-nav");
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
            deck.initialize()

            document.getElementById("map-slide").addEventListener("click", () => {
              deck.slide(2,0,0)
            })

            showNav();
          });

  document.getElementById("exit")
          .addEventListener("click", () => {
            document.querySelectorAll('.reveal').remove();
            // document.getElementById("reveal").classList.add("hide");
            document.getElementById("start-page-container").classList.remove("hide")
            document.getElementById("body").classList.remove("reveal-viewport")
            document.getElementById("main").classList.remove("reveal-full-page")
            window.location.href = "#";
            
            hideNav();
          });
};
