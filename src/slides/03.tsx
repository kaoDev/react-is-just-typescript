import * as React from "react";
import { Heading, Appear, Slide, Image } from "spectacle";
import { assets } from "../images";
import styled from "@emotion/styled";

const CodeImage = styled(Image)({
  maxWidth: "80%!important",
});

export default (
  <Slide>
    <Heading size={1} fit caps lineHeight={1}>
      Why TypeScript?
    </Heading>
    <Appear>
      <CodeImage src={assets.complexType} />
    </Appear>
  </Slide>
);
