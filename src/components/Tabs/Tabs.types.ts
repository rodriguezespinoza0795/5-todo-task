export interface BasicTabsProps {
  tabOption: number;
  handleChange: (event: React.SyntheticEvent, tabOption: number) => void;
  children: React.ReactNode;
}
