import { useState } from "react";

export function useOption() {
  const [selectedOption, setSelectedOption] = useState<string | null>(null);

  function handleOptionSelect(optionId: string) {
    setSelectedOption(optionId);
  }

  return {
    selectedOption,
    handleOptionSelect,
  };
}
