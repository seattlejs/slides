import React, { useEffect } from 'react';
import { Deck, FullScreen, Progress, FlexBox, Box } from 'spectacle';
import { theme } from './theme.jsx';
import { Link } from 'react-router-dom';

const SlideDeck = props => {
  useEffect(() => {
    document.title = `${props.title}`;
  })

  return (
    <Deck
      theme={theme}
      transitionEffect='slide'
      template={() => {
        return (
          <FlexBox justifyContent="space-between" position="fixed" bottom={0} width={1} >
            <Box padding='0 20px'>
              <FullScreen />
            </Box>
            <Box >
              <Progress />
            </Box>
            <Box padding='0 20px'>
              <Link to='/slides' style={{ color: '#FFFFFF', fontSize: '40px', textDecoration: 'none', pointerEvents: 'auto' }}>⌂</Link>
            </Box>
          </FlexBox>
        );
      }}
    >
      {props.children}
    </Deck>
  );
}

export default SlideDeck;
