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
            let countries = ["Japan", "China", "Vietnam", "Thailand", "Chile"];
            
            let mapSlide = document.getElementById("map");
            let countryContainer = document.createElement("UL");
            countryContainer.setAttribute("id", "country-list")
            mapSlide.appendChild(countryContainer);

            countries.forEach((country) => {
              let link = document.createElement("DIV");
              link.setAttribute("class", "country-link")
              link.innerHTML = country;

              link.addEventListener("click", (e) => {
                window.location.href = (`#/${e.target.innerHTML}`)
              });

              mapSlide.append(link);
            })

            document.getElementById("start-page-container").classList.add("hide")
            document.getElementById("reveal").classList.remove("hide")

            let deck = new Reveal({
              plugins: [Markdown],
            });
            deck.initialize()

            document.getElementById("map-nav").addEventListener("click", () => {
              deck.slide(2,0,0)
            })

            showNav();
          });

  document.getElementById("exit")
          .addEventListener("click", () => {
            document.getElementById("map").innerHTML = "";
            document.getElementById("reveal").classList.add("hide");
            document.getElementById("start-page-container").classList.remove("hide")
            document.getElementById("body").classList.remove("reveal-viewport")
            document.getElementById("main").classList.remove("reveal-full-page")
            window.location.href = "#";
            
            hideNav();
          });
};
