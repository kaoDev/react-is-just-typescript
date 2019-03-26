import * as React from "react";
import { Text, Heading, Slide, Appear } from "spectacle";

export default (
  <Slide>
    <Heading size={3} caps lineHeight={1} textColor="tertiary">
      Pure TypeScript
    </Heading>
    <Appear>
      <Text textColor="quarternary" textFont="tertiary">
        $ npx tsc --init
      </Text>
    </Appear>
    <Appear>
      <Text textColor="secondary">tweak tsconfig to your needs</Text>
    </Appear>
    <Appear>
      <Text textColor="secondary">edit build config</Text>
    </Appear>
    <Appear>
      <Text textColor="secondary">rename files to *.ts / *.tsx</Text>
    </Appear>
    <Appear>
      <Text margin="50px auto" textColor="quarternary" textFont="tertiary">
        npx create-react-app my-app --typescript
      </Text>
    </Appear>
  </Slide>
);
