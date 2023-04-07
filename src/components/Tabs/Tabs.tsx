import { Tabs, Box } from '@mui/material';
import { BasicTabsProps } from './Tabs.types';

export default function BasicTabs({ tabOption, handleChange, children }: BasicTabsProps) {
  return (
    <Box sx={{ width: '100%' }}>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs
          value={tabOption}
          onChange={handleChange}
          aria-label='basic tabs example'
          variant='fullWidth'
        >
          {children}
        </Tabs>
      </Box>
    </Box>
  );
}
