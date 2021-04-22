import Reveal from 'reveal.js';
import Markdown from 'reveal.js/plugin/markdown/markdown.esm.js';

import './stylesheets/reset.css';
import './stylesheets/reveal.css';
import './stylesheets/moon.css';
import './stylesheets/index.css';

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
            let biases = ["Confirmation Bias", "Selection Bias", "Survivorship Bias", 
            "Recency Bias", "Dunning-Kruger Effect", "Sunk Cost Fallacy", "Anchoring Effect",
            "Halo Effect", "Frequency Illusion (Baader-Meinhof)"];
            
            let homeSlide = document.getElementById("home");
            let biasContainer = document.createElement("UL");
            // biasContainer.setAttribute("id", "country-list")
            homeSlide.appendChild(biasContainer);

            biases.forEach((bias) => {
              let link = document.createElement("DIV");
              link.setAttribute("class", "bias-link")
              link.innerHTML = bias;

              link.addEventListener("click", (e) => {
                window.location.href = (`#/${e.target.innerHTML}`)
              });

              homeSlide.append(link);
            })

            document.getElementById("start-page-container").classList.add("hide")
            document.getElementById("reveal").classList.remove("hide")

            let deck = new Reveal({
              plugins: [Markdown],
            });
            deck.initialize()

            document.getElementById("bias-nav").addEventListener("click", () => {
              deck.slide(0,0,0)
            })

            showNav();
          });

  document.getElementById("exit")
          .addEventListener("click", () => {
            document.getElementById("home").innerHTML = "";
            document.getElementById("reveal").classList.add("hide");
            document.getElementById("start-page-container").classList.remove("hide")
            document.getElementById("body").classList.remove("reveal-viewport")
            document.getElementById("main").classList.remove("reveal-full-page")
            window.location.href = "#";
            
            hideNav();
          });
};
