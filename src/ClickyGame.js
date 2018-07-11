import React, { Component } from "react";
import Wrapper from "./components/Wrapper";
import Image from "./components/Image"
import "./ClickyGame.css";
import images from "./images.json";

class ClickyGame extends Component {
  //state comes here
  state = {
    images,
    imageClickedId: [],
    score: 0,
    totalScore: 0,
    topScore: 0
  };

  handleImageChange = id => {
    var imageClickedId = this.state.imageClickedId;
    // check to see if it's first time or not
    if (!imageClickedId.includes(id)) {
      imageClickedId.push(id)
      // if all images in json displayed
      if (imageClickedId.length === 10) {
        this.setState({ score: 10, totalScore: 10, imageClickedId: [] });
        return;
      }
      // if it's a winner
      if (this.state.score >= this.state.totalScore) {
        this.state.topScore = this.state.score + 1;
      }
      this.setState({ images, imageClickedId, score: imageClickedId.length, totalScore: this.state.topScore });
      // random generating image for all images
      for (var i = images.length - 1; i > 0; i--) {
        var j = Math.floor((Math.random() * (i)) + 0);
        [images[j], images[i]] = [images[i], images[j]];
      }

    } else {
      //lost game over
      if (this.state.score < this.state.totalScore) {
        this.state.topScore = this.state.totalScore;
      }
      this.setState({ imageClickedId: [], score: 0, totalScore: this.state.topScore });
      return;
    }
  }

  render() {
    return (
      <div className="App">

        <header className="App-header">
        <div className = "Col-md-12">Clicky Game</div>
        <div className = "row">
           
            <div className = "col-md-3">Click an image to begin!</div>
            <div className = "col-md-6 col-md-offset-3"> <h1> Score: {this.state.score} <span> | </span> Top Score: {this.state.totalScore}</h1></div>
            
        
        </div>
          
        </header>

      
        <Wrapper>
          {this.state.images.map(img => (
            <Image
              handleImageChange={this.handleImageChange}
              id={img.id}
              url={img.url}
            />
          ))}
        </Wrapper>
        <hr></hr>
        <p>Click an unique image each time to earn points.</p>
      </div>
    );
  }
}

export default ClickyGame;
