import React from 'react';
import SlideDeck from './SlideDeck';
import { Slide, Heading, Progress, FullScreen, Image, FlexBox, Box, Link } from 'spectacle';
import FormidableLogo from '../../images/formidable-white.svg';

const SpecialEvent = () => {
  return (
    <SlideDeck title='Special Event'>
      <Slide>
        <FlexBox flexDirection='column' justifyContent='center' alignItems='center' flex='1'>
          <Heading fontSize='h2'>
            Welcome to
          </Heading>
          <Heading fontSize='h2'>
            Interview Prep Workshop
          </Heading>
          <Heading fontSize='h2'>
            with Hatchways
          </Heading>
          <Heading fontSize='h2'>
            and Seattle JS
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

      <Slide >
        <FlexBox flexDirection='column' justifyContent='center' alignItems='center' flex='1'>
          <Heading fontSize='h2' >
            A Big Thank You To
          </Heading>
          <Heading fontSize='200px'>
            Hatchways
          </Heading>
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
            Seattle JS
          </Heading>
          <Heading fontSize='h2'>
            Monthly Virtual Meetup
          </Heading>
          <Heading fontSize='text'>
            Every 2nd Thursday 6:00pm to 8:00pm PST
          </Heading>
          <Heading fontSize='text'>
            Next Event: February 11th
          </Heading>
        </FlexBox>
      </Slide>

      <Slide backgroundColor='primary'>
        <FlexBox flexDirection='column' justifyContent='center' alignItems='center' flex='1'>
          <Heading>
            Seattle JS Hackers
          </Heading>
          <Heading fontSize='h2'>
            Virtual Coffee
          </Heading>
          <Heading fontSize='text'>
            Every 2nd Sunday 11:30am to 2:00pm PST
          </Heading>
          <Heading fontSize='text'>
            Next Event: February 14th
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
            Every 3rd Tuesday 5:30pm to 8:00pm PST
          </Heading>
          <Heading fontSize='text'>
            Next Event: February 16th
          </Heading>
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

      <Slide>
        <FlexBox flexDirection='column' justifyContent='center' alignItems='center' flex='1'>
          <Heading fontSize='h1'>
            Our Talk
        </Heading>
        </FlexBox>
      </Slide>

      <Slide>
        <FlexBox flexDirection='column' justifyContent='center' alignItems='center' flex='1'>
          <Heading fontSize='h3'>
            Shums, CTO of Hatchways
          </Heading>
          <Heading fontSize='text'>
            Walk through your project in an interview
          </Heading>
        </FlexBox>
      </Slide>
    </SlideDeck>
  );
}

export default SpecialEvent;
