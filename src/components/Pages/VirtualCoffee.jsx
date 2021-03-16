import React from 'react';
import SlideDeck from './SlideDeck';
import { Slide, Heading, FlexBox, Image, Link } from 'spectacle';
import FormidableLogo from '../../images/formidable-white.svg';

const VirtualCoffee = () => {
  return (
    <SlideDeck title='Virtual Coffee'>
      <Slide>
        <FlexBox flexDirection='column' justifyContent='center' alignItems='center' flex='1'>
          <Heading>
            Seattle JS Hackers
          </Heading>
          <Heading>
            Virtual Coffee
          </Heading>
          <Heading fontSize='text'>
            Event Will Start Shortly
          </Heading>
        </FlexBox>
      </Slide>

      <Slide>
        <FlexBox flexDirection='column' justifyContent='center' alignItems='center' flex='1'>
          <Heading fontSize='h2'>
            A Big Thank You To
          </Heading>
          <Heading fontSize='h2'>
            Our Sponsor And Host
          </Heading>
          <Image src={FormidableLogo} />
        </FlexBox>
      </Slide>

      <Slide>
        <FlexBox flexDirection='column' justifyContent='center' alignItems='center' flex='1'>
          <Heading lineHeight={1}>
            Seattle JS Hackers
          </Heading>
          <Heading fontSize='h3' lineHeight={1}>
            Follow us on Twitter:
          </Heading>
          <Link color='primary' fontSize='h3' lineHeight={1} textDecoration='none'>@JS_Hackers</Link>
          <Heading fontSize='h3' lineHeight={1}>
            Join our Slack:
          </Heading>
          <Link color='primary' fontSize='h3' lineHeight={1}>SeattleJSHackers.com</Link>
        </FlexBox>
      </Slide>

      <Slide>
        <FlexBox flexDirection='column' justifyContent='center' alignItems='center' flex='1'>
          <Heading lineHeight={1}>
            Seattle JS
          </Heading>
          <Heading fontSize='h3' lineHeight={1}>
            Follow us on Twitter:
          </Heading>
          <Link color='primary' fontSize='h3' lineHeight={1} textDecoration='none'>@SeattleJS</Link>
          <Heading fontSize='h3' lineHeight={1}>
            Join our Slack:
          </Heading>
          <Link color='primary' fontSize='h3' lineHeight={1} textDecoration='none'>Link in Pinned Tweet</Link>
        </FlexBox>
      </Slide>

      <Slide backgroundColor='primary'>
        <FlexBox flexDirection='column' justifyContent='center' alignItems='center' flex='1'>
          <Heading fontSize='h1'>
            Upcoming Events
          </Heading>
        </FlexBox>
      </Slide>

      <Slide backgroundColor='primary'>
        <FlexBox flexDirection='column' justifyContent='center' alignItems='center' flex='1'>
          <Heading>
            Seattle JS Hackers
          </Heading>
          <Heading fontSize='h2'>
            Code Katas [Virtual]
          </Heading>
          <Heading fontSize='text'>
            Every 3rd Tuesday 5:30pm to 8:00pm PT
          </Heading>
          <Heading fontSize='text'>
            Next Event: March 16th
          </Heading>
        </FlexBox>
      </Slide>

      <Slide backgroundColor='primary'>
        <FlexBox flexDirection='column' justifyContent='center' alignItems='center' flex='1'>
          <Heading>
            Seattle JS
          </Heading>
          <Heading fontSize='h2'>
            Monthly Virtual Meetup
          </Heading>
          <Heading fontSize='text'>
            Every 2rd Thursday 6:00pm to 8:00pm PT
          </Heading>
          <Heading fontSize='text'>
            Next Event: April 8th
          </Heading>
        </FlexBox>
      </Slide>

      <Slide>
        <FlexBox flexDirection='column' justifyContent='center' alignItems='center' flex='1'>
          <Heading fontSize='h1'>
            Introductions
          </Heading>
        </FlexBox>
      </Slide>

      <Slide>
        <FlexBox flexDirection='column' justifyContent='center' alignItems='center' flex='1'>
          <Heading fontSize='h1'>
            Virtual Coffee!
          </Heading>
        </FlexBox>
      </Slide>

      <Slide bgColor="secondary">
        <FlexBox flexDirection='column' justifyContent='center' alignItems='center' flex='1'>
          <Heading >
            Sponsor ❤
          </Heading>
          <Image src={FormidableLogo} />
        </FlexBox>
      </Slide>

      <Slide>
        <FlexBox flexDirection='column' justifyContent='center' alignItems='center' flex='1'>
          <Heading fontSize='h2'>
            Thanks for Joining Us!
          </Heading>
          <Heading fontSize='h3'>
            Join us next time on April 11th
          </Heading>
        </FlexBox>
      </Slide>
    </SlideDeck>
  );
}

export default VirtualCoffee;
