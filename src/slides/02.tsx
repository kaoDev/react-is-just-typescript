import * as React from "react";
import styled from "@emotion/styled";
import { Slide, Heading, Text, Link, Image } from "spectacle";
import { assets } from "../images";

const Logo = styled(Image)({
  height: 64,
});

export default (
  <Slide transition={["fade"]}>
    <Heading>Hi</Heading>
    <Text textColor="secondary" textSize="32px">
      I'm Kalle Ott, Software developer from Kiel
    </Text>
    <Text textColor="secondary" textSize="32px">
      Working for
    </Text>
    <Link target="_blank" margin="24px auto" href="https://cap3.de">
      <Logo src={assets.cap3} />
    </Link>
    <Text margin="50px auto" textSize="24px" textColor="secondary">
      find me on twitter:{" "}
      <Link
        target="_blank"
        textColor="secondary"
        href="https://twitter.com/kaoDev"
      >
        @kaoDev
      </Link>
    </Text>
  </Slide>
);
