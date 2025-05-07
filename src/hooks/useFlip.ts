import { useState } from "react";

type UseFlip = (initialValue?: boolean) => [boolean, () => void];

const useFlip: UseFlip = (initialValue = false) => {
  const [isFlipped, setIsFlipped] = useState(initialValue);

  const toggleFlip = () => {
    setIsFlipped((prevState) => !prevState);
  };

  return [isFlipped, toggleFlip];
};

export default useFlip;
