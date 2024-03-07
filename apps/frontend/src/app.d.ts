export {};

declare global {
  type RootState = import("@/app/store").RootState;
  type AppDispatch = import("@/app/store").AppDispatch;
}
