import { DependencyList, useEffect } from "react";

export default function useEffectAsync(effect: () => void, deps: DependencyList) {
  useEffect(() => {
    let isSubscribed = true;

    if (isSubscribed) {
      effect();
    }

    return () => {
      isSubscribed = false;
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, deps);
}
