import styled from "@emotion/styled";
import React, { forwardRef } from "react";

export const GiphyWrapper = styled.div({
  width: "100%",
  height: 0,
  paddingBottom: "60%",
  position: "relative",
});

export const GiphyFrame = styled.iframe({
  position: "absolute",
  left: 0,
  right: 0,
});

export const Giphy = forwardRef<HTMLIFrameElement, { src: string }>(
  (props, ref) => (
    <GiphyFrame
      ref={ref}
      src={props.src}
      width="100%"
      height="100%"
      frameBorder="0"
      className="giphy-embed"
      allowFullScreen
    />
  ),
);
