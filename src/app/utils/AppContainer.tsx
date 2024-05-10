"use client";
import { GlobalStateProvider } from "./GlobalStateContexts";
export default function AppContainer(props: { children: any }) {
  const { children } = props;
  return (
    <>
      <GlobalStateProvider>{children}</GlobalStateProvider>
    </>
  );
}
