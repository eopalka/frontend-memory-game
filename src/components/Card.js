import React, { Component } from 'react'
import ReactCardFlip from 'react-card-flip';

class Card extends Component {
        constructor() {
          super();
            this.state = {
            isFlipped: false
          };
          this.handleClick = this.handleClick.bind(this);
        }
      
        handleClick(e) {
          e.preventDefault();
          this.setState(prevState => ({ isFlipped: !prevState.isFlipped }));
        }
      
        render() {
          return (
            <ReactCardFlip isFlipped={this.state.isFlipped} flipDirection="vertical">
              <div onClick={this.handleClick}
              style={{ 
                  backgroundColor: "black", 
                  height: 100,
                  width: 100, 
                  display: "flex", 
                  justifyContent: "center", 
                  alignItems: "center"
                }}>
              </div>
      
              <div onClick={this.handleClick} 
              style={{
                  backgroundColor: "purple", 
                  height: 100,
                  width: 100, 
                  display: "flex", 
                  justifyContent: "center", 
                  alignItems: "center"
                }}>
              </div>
            </ReactCardFlip>
          )
        }
      }


export default Card
