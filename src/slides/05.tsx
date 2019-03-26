import * as React from "react";
import { Slide, Appear, Text, Heading, Image, Anim } from "spectacle";
import { Error } from "../components/Error";
import { assets } from "../images";
import styled from "@emotion/styled";

const imgHeight = 350;

const Reaction = styled.div({
  position: "absolute",
  left: 0,
  right: 0,
});
const Spacer = styled.div({
  position: "relative",
  height: imgHeight,
  paddingTop: 32,
});

export default (
  <Slide>
    <Heading size={3} fit caps lineHeight={1} textColor="tertiary">
      One part of TS is all about the <Error>squiggles</Error>
    </Heading>
    <Appear>
      <Text textColor="secondary">
        It marks <Error>potential</Error> and <Error>real bugs</Error>
        <Appear>
          <span> (90% typos)</span>
        </Appear>
      </Text>
    </Appear>
    <Spacer>
      <Appear>
        <Reaction>
          <Image width={320} src={assets.anger} />
        </Reaction>
      </Appear>
      <Appear>
        <Reaction>
          <Image width={320} src={assets.joy} />
        </Reaction>
      </Appear>
    </Spacer>
  </Slide>
);
