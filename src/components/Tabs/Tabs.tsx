import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';

export default function BasicTabs({
  value,
  handleChange,
}: {
  value: number;
  handleChange: (event: React.SyntheticEvent, newValue: number) => void;
}) {
  return (
    <Box sx={{ width: '100%' }}>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs value={value} onChange={handleChange} aria-label='basic tabs example'>
          <Tab label='All' />
          <Tab label='Pending' />
          <Tab label='Completed' />
        </Tabs>
      </Box>
    </Box>
  );
}
