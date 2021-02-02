import React from 'react';
import SlideDeck from './SlideDeck';
import { Slide, Heading, FlexBox, Image, Link, CodeSpan as Code } from 'spectacle';
import FormidableLogo from '../../images/formidable-white.svg';

const CodeKatas = () => {
  return (
    <SlideDeck title='Code Katas'>
      <Slide>
        <FlexBox flexDirection='column' justifyContent='center' alignItems='center' flex='1'>
          <Heading>
            Seattle JS Hackers
          </Heading>
          <Heading>
            Code Katas [Virtual]
          </Heading>
          <Code textAlign='center'>
            Please join our Slack to participate, then join the "Katas" Channel. Find the Slack invite link at <Link fontFamily='monospace' color='primary' margin='0px' padding='0px'>SeattleJSHackers.com</Link>.
          </Code>
          <Heading fontSize='text'>
            Event Starts at 6pm PST
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
          <Link color='primary' fontSize='h3' lineHeight={1}>Link in Pinned Tweet</Link>
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
            Virtual Coffee
          </Heading>
          <Heading fontSize='text'>
            Every 2nd Sunday 11:30am to 2:00pm PST
          </Heading>
          <Heading fontSize='text'>
            Next Event: March 14th
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
            Every 2rd Thursday 6:00pm to 8:00pm PST
          </Heading>
          <Heading fontSize='text'>
            Next Event: March 11th
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
            Code Katas!
          </Heading>
          <Heading fontSize='h3'>
            Round 1: Warm up challenge
          </Heading>
        </FlexBox>
      </Slide>

      <Slide>
        <FlexBox flexDirection='column' justifyContent='center' alignItems='center' flex='1'>
          <Heading fontSize='h1'>
            Code Katas!
          </Heading>
          <Heading fontSize='h3'>
            Round 2: Challenge yourself
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
            Join us next time on March 16th
          </Heading>
        </FlexBox>
      </Slide>
      <Slide>
        <FlexBox flexDirection='column' justifyContent='center' alignItems='center' flex='1'>
          <Heading fontSize='h1'>
            Community Minute
          </Heading>
          <Heading fontSize='h3'>
            Final Thoughts and Feedback
          </Heading>
        </FlexBox>
      </Slide>
    </SlideDeck>
  );
}

export default CodeKatas;
