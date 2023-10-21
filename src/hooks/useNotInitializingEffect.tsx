import { useRef, useEffect } from 'react';

// useEffectの初回実行阻止
export const useNotInitializingEffect = () => {
  const useNotInitializingEffect = useRef<boolean>(false);

  useEffect(() => {
    useNotInitializingEffect.current = true;
  }, []);

  return useNotInitializingEffect;
};
