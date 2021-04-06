import React, { Component } from 'react'
import { images } from "./Images/index"

class Card extends Component {
        // array for cards to go into
        cards = [];
        handleClick = (e) => {
          let card = e.target;
          if (card.getAttribute("check") === "found") {
            return
          }
          // either push into the array or leave them out
          if (card !== this.cards[0]) {
            this.switch(card)
            this.cards.push(card)
          }
          else {
            this.switch(card)
            this.cards = []
          }

          // if you have more than two cards in the array check if they match
          if (this.cards.length > 2) {
            if (!this.isMatching(this.cards[0], this.cards[1])) {
              this.switch(this.cards[0])
              this.switch(this.cards[1])
              this.cards.shift()
              this.cards.shift()
            }
            else {
              this.cards.shift()
              this.cards.shift()
            }
          }

          // no cards left them the game is over
          let images = document.getElementsByClassName("image-blank")
          if (images.length < 1) {
            this.props.gameOver(true)
            let restart = document.getElementsByClassName("image")
            for (let i = 0; i, restart.length; i++) {
              restart[i].classList.add("image-blank")
              restart[i].setAttribute("check", "false")
              this.cards = []
            }
          }
        }


        // function for checking cards to match by name attribute
        isMatching = (card1, card2) => {
          if (card1.getAttribute("name") === card2.getAttribute("name")) {
            card1.setAttribute("check", "found")
            card2.setAttribute("check", "found")
            return true
          }
          else {
            return false
          }
        }

        switch = (target) => {
          if (target.getAttribute("check") === "true"){
            target.setAttribute("check", "false")
            target.classList.add("image-blank")
          }
          else {
            target.setAttribute("check", "true")
            target.classList.remove("image-blank")
          }
        }


        render() {
          console.log(images)
          return (
            <div className="images">
              {images
              .sort(() => Math.random() - 0.5)
              .map((element, index) => { 
                return (
                  <div
                  key = {index}
                  className="image image-blank"
                  name={element.name}
                  check="false"
                  style={{backgroundImage: `url(${element.pic})`}}
                  onClick={this.handleClick}
                  >
                 
                  </div>
                )
              })}
            </div>
          )
        }

       
      
}
export default Card
