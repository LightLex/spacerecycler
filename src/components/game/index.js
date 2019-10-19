import React from 'react';
import { Stage, Text } from '@inlet/react-pixi';

const GamePage = () => (
    <Stage options={{ backgroundColor: 0xd7faf6 }}>
      <Text
            text="Hello World"
            anchor={0.5}
            x={150}
            y={150}
        />
    </Stage>
  );

export default GamePage;
