import * as React from "react";
import { Appear, Heading, Quote, Slide, Text, Cite } from "spectacle";

export default (
  <Slide>
    <Heading size={3} caps lineHeight={1} textColor="tertiary">
      choose the level of strictness
    </Heading>
    <Appear>
      <Text textColor="secondary">
        tsconfig.json can go from{" "}
        <Appear>
          <Quote textColor="secondary">
            hey I found a little typo for you
            <Cite>tsc</Cite>
          </Quote>
        </Appear>
        <Appear>
          <span>to</span>
        </Appear>
        <Appear>
          <Quote textColor="#f50">
            WTF ARE YOU DOING, THIS SHIT WILL NEVER WORK!!!!!
            <Cite>tsc</Cite>
          </Quote>
        </Appear>
      </Text>
    </Appear>
  </Slide>
);
