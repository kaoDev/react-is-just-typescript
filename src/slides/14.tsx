import * as React from "react";
import { Appear, Heading, Link, Slide, Text } from "spectacle";

export default (
  <Slide>
    <Heading size={3} caps lineHeight={1} textColor="tertiary">
      After the deep dive
    </Heading>
    <Appear>
      <Text textColor="secondary">Use typescript as default</Text>
    </Appear>
    <Appear>
      <Text textColor="secondary">
        Get angry about missing type definitions of npm packages
      </Text>
    </Appear>
    <Appear>
      <Text textColor="quarternary">
        But please!!! don't dump your anger on OSS maintainers
      </Text>
    </Appear>
    <Appear>
      <Text textColor="secondary">
        join thousands of contributors and extend the{" "}
        <Link
          textColor="quarternary"
          target="_blank"
          href="https://github.com/DefinitelyTyped/DefinitelyTyped/"
        >
          Definitely Typed
        </Link>{" "}
        Repository
      </Text>
    </Appear>
  </Slide>
);
