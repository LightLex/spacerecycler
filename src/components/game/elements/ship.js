import React from 'react';
import FlareComponent from 'flare-react';
import rocket from './Spaceship.flr';
function ship(props) {
    const left = Math.round(props.centreX - (props.width / 2));
    const top = Math.round(props.centreY - (props.height / 2));
    const shipStyle = { 
        width: `calc(${props.width}px)`, 
        height: `calc(${props.height}px)`, 
        top: `calc(${top}px)`,
        left: `calc(${left}px)`, 
        position: 'absolute',
        zIndex: 1 
    };
    return (
      <FlareComponent width={100} height={100} animationName="Untitled" transparent={true} file={rocket} style={shipStyle}/>
    );
}

export default ship;