export {};

declare module "react" {
  interface CSSProperties {
    [key: `--${string}`]: string | number;
  }
}

declare global {
  type RootState = import("./app/store").RootState;
  type AppDispatch = import("./app/store").AppDispatch;
}
