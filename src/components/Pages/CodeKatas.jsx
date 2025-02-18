import React from 'react';
import SlideDeck from './SlideDeck';
import { Slide, Heading, FlexBox, Image, Link, CodeSpan as Code } from 'spectacle';
import AWSSmile from '../../images/awsSmile.png';
import Seekout from '../../images/seekout-logo.svg';

const CodeKatas = () => {
  return (
    <SlideDeck title='Code Katas'>
      <Slide>
        <FlexBox flexDirection='column' justifyContent='center' alignItems='center' flex='1'>
          <Heading fontSize={175}>
            Code Katas
          </Heading>
          <Heading fontSize={85}>
            with Seattle JS Hackers
          </Heading>
          <Code textAlign='center' color='#FF0000'>
            Please join our Discord to participate, then join the "Katas" Channel. Find the Discord link at <Link fontFamily='monospace' color='#FF0000' margin='0px' padding='0px'>SeattleJS.com/join</Link>.
          </Code>
          <Heading fontSize='text'>
            Event Starts at 6pm PT
          </Heading>
        </FlexBox>
      </Slide>
      <Slide>
        <FlexBox flexDirection='column' justifyContent='center' alignItems='center' flex='1'>
          <Heading fontSize='h2'>
            A Big Thank You To
          </Heading>
          <Heading fontSize='h2'>
            Our Host
          </Heading>


          <Heading fontSize='h2'>
            <FlexBox flexDirection='row' alignItems='flex-start'>
              <Image src={AWSSmile} width={250} style={{ margin: '25px 25px 0 0' }} /> Skills Center
            </FlexBox>
          </Heading>
        </FlexBox>
      </Slide>

      <Slide>
        <FlexBox flexDirection='column' justifyContent='center' alignItems='center' flex='1'>
          <Heading fontSize='h2'>
            A Big Thank You To
          </Heading>
          <Heading fontSize='h2'>
            Our Sponsor
          </Heading>
          <Image src={Seekout} width={1100} style={{ marginTop: '35px' }} />
        </FlexBox>
      </Slide>

      <Slide>
        <FlexBox flexDirection='column' justifyContent='center' alignItems='center' flex='1'>
          <Heading lineHeight={1}>
            Seattle JS Hackers
          </Heading>
          {/* <Heading fontSize='h3' lineHeight={1}>
            Follow us on Twitter:
          </Heading>
          <Link color='#FF0000' fontSize='h3' lineHeight={1} textDecoration='none'>@JS_Hackers</Link> */}
          <Heading fontSize='h3' lineHeight={1}>
            Find out more at
          </Heading>
          <Link color='#FF0000' fontSize='h3' lineHeight={1}>SeattleJSHackers.com</Link>
        </FlexBox>
      </Slide>

      <Slide>
        <FlexBox flexDirection='column' justifyContent='center' alignItems='center' flex='1'>
          <Heading lineHeight={1}>
            Seattle JS
          </Heading>
          <Heading fontSize='h3' lineHeight={1}>
            Find out more at:
          </Heading>
          <Link color='#FF0000' fontSize='h3' lineHeight={1} textDecoration='none'>SeattleJS.com</Link>
          <Heading fontSize='h3' lineHeight={1}>
            Join our Discord:
          </Heading>
          <Link color='#FF0000' fontSize='h3' lineHeight={1}>SeattleJS.com/join</Link>
        </FlexBox>
      </Slide>

      <Slide>
        <FlexBox flexDirection='column' justifyContent='center' alignItems='center' flex='1'>
          <Heading fontSize='h1'>
            Upcoming Events
          </Heading>
          <Heading fontSize='h3' lineHeight={1}>
            Find more info at
          </Heading>
          <Link color='#FF0000' fontSize='h3' lineHeight={1}>lu.ma/seattlejs</Link>
        </FlexBox>
      </Slide>

      {/* <Slide backgroundColor='primary'>
        <FlexBox flexDirection='column' justifyContent='center' alignItems='center' flex='1'>
          <Heading>
            Seattle JS Hackers
          </Heading>
          <Heading fontSize='h2'>
            Virtual Coffee
          </Heading>
          <Heading fontSize='text'>
            Every 1st Thursday 5:30pm to 7:00pm PT
          </Heading>
          <Heading fontSize='text'>
            Next Event: June 3rd
          </Heading> 
        </FlexBox>
      </Slide> */}

      {/* <Slide backgroundColor='primary'>
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
            Next Event: June 10th
          </Heading>
        </FlexBox>
      </Slide> */}

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
          <Heading fontSize='148px'>
            <FlexBox flexDirection='row' alignItems='flex-start'>
              <Image src={AWSSmile} width={345} style={{ margin: '41px 24px 0 0' }} /> Skills Center
            </FlexBox>
          </Heading>

          <Image src={Seekout} width={1100} style={{ marginBottom: '20px' }} />

        </FlexBox>
      </Slide>
      <Slide>
        <FlexBox flexDirection='column' justifyContent='center' alignItems='center' flex='1'>
          <Heading fontSize='h2'>
            Thanks for Joining Us!
          </Heading>
          <Heading fontSize='h3'>
            Join us next month.
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
