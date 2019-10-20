import React, { Component } from 'react';
import Ship from './elements/ship';
import backgroundImg from './elements/blackmarble_2016_americas_composite.png';
import Background from './elements/background';
import '../../index.css';

// const GamePage = () => (
//     <Stage options={{ backgroundColor: 0xd7faf6 }}>
//       <Ship
//         width={40}
//         height={40}
//         fill={0xff0000} />
//     </Stage>
//   );

class GamePage extends Component {
  constructor(props) {
    super(props);

    this.state = {
        playerX: 100,
        playerY: 100,
        windowWidth: 800,
        windowHeight: 600,
        playerMomentum: 0,
        playerRotation: 0,
        playerVelocityX: 0,
        playerVelocityY: 0
    };

    this.gameStyle = {
      position: 'relative',
      windowWidth: 800,
      windowHeight: 600
    }

    this.playerWidth = 50;
    this.playerHeight = 50;

    this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
    this.onKeyDown = this.onKeyDown.bind(this);      
            
}
  onKeyDown(e) {
    switch (e.which) {
        case 37: // Left
            this.playerSteer(-10);
            break;
        case 38: // Up
            this.playerAccelerate(0.3);
            break;
        case 39: // Right
            this.playerSteer(10);
            break;
        case 40: // Down
            this.playerAccelerate(-0.5);
            break;
        default:
            break;
    }
  }  
  updateWindowDimensions() {
    this.setState({ windowWidth: window.innerWidth, windowHeight: window.innerHeight });
  }
  render() {
    return (
      <div style={this.gameStyle}>
        <Background backgroundImage={backgroundImg} windowWidth={this.state.windowWidth} windowHeight={this.state.windowHeight} />
        <Ship centreX={this.state.playerX} 
                centreY={this.state.playerY} width={this.playerWidth}
                height={this.playerHeight} rotation={this.state.playerRotation} />   
      </div>
    );
  }
}

export default GamePage;
