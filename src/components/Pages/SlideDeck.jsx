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
          <FlexBox justifyContent="space-between" position="fixed" bottom={0} width={1} zIndex={1000}>
            <Box >
              <FullScreen />
            </Box>
            <Box >
              <Progress />
            </Box>
            <Box >
              <Link to='/slides' style={{ color: '#FFFFFF', fontSize: '40px', textDecoration: 'none', zIndex: '2001', pointerEvents: 'auto' }}>⌂</Link>
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
