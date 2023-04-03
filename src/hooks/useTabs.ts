import { useState } from 'react';

export const useTabs = () => {
  const [tabOption, setTabOption] = useState(0);

  const handleChange = (event: React.SyntheticEvent, tabOption: number) => {
    setTabOption(tabOption);
  };

  return { tabOption, handleChange };
};
