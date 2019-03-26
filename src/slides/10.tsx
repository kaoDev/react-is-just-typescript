import * as React from "react";
import { Heading, Slide, Image } from "spectacle";
import { assets } from "../images";

export default (
  <Slide>
    <Heading fit caps lineHeight={1} textColor="tertiary">
      How to start?
    </Heading>
    <Image src={assets.gradualProgress} />
  </Slide>
);
