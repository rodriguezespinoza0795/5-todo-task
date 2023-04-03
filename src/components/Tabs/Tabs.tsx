import { Tabs, Tab, Box } from '@mui/material';
import { useTranslation } from 'react-i18next';

export default function BasicTabs({
  tabOption,
  handleChange,
}: {
  tabOption: number;
  handleChange: (event: React.SyntheticEvent, tabOption: number) => void;
}) {
  const { t } = useTranslation('common');
  return (
    <Box sx={{ width: '100%' }}>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs
          value={tabOption}
          onChange={handleChange}
          aria-label='basic tabs example'
          variant='fullWidth'
        >
          <Tab label={t('all')} />
          <Tab label={t('pending')} />
          <Tab label={t('completed')} />
        </Tabs>
      </Box>
    </Box>
  );
}
