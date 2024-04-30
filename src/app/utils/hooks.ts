import { useEffect, useState } from "react";

const useMounted = () => {
  const [mounted, setMounted] = useState<boolean>();
  // effects run only client-side
  // so we can detect when the component is hydrated/mounted
  // @see https://react.dev/reference/react/useEffect
  useEffect(() => {
    setMounted(true); //fires once at the beginning and when the dependencies [] change
  }, []);
  return mounted;
};

export { useMounted };
