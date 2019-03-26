import preloader from "spectacle/lib/utils/preloader";

export const assets = {
  cap3: require("./assets/cap3-green.svg"),
  complexType: require("./assets/complex-type.png"),
  anger: require("./assets/anger.webp"),
  joy: require("./assets/joy.webp"),
  gradualProgress: require("./assets/gradual-progress.webp"),
};

preloader(assets);
