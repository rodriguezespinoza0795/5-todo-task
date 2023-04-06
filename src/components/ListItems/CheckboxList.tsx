import {
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Checkbox,
  IconButton,
  Tooltip,
} from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import { useTranslation } from 'react-i18next';
import { CheckboxListProps } from './CheckboxList.types';
import { useModal } from '~/hooks';
import { Modal } from '~/components';

export default function CheckboxList({ tasks, deleteItem, completeItem }: CheckboxListProps) {
  const { t } = useTranslation('common');
  const { open, handleClose, handleconfirm, handlecomplete } = useModal(deleteItem);

  return (
    <>
      <List
        sx={{
          width: '100%',
        }}
      >
        {tasks.map(({ name, id, completed }) => {
          const labelId = `checkbox-list-label-${id}`;

          return (
            <ListItem
              key={id}
              secondaryAction={
                <Tooltip title={t('delete')}>
                  <IconButton edge='end' aria-label='comments' onClick={() => handleconfirm(id)}>
                    <DeleteIcon />
                  </IconButton>
                </Tooltip>
              }
              disablePadding
            >
              <ListItemButton role={undefined} onClick={() => completeItem(id)} dense>
                <ListItemIcon>
                  <Checkbox
                    edge='start'
                    checked={completed}
                    tabIndex={-1}
                    disableRipple
                    inputProps={{ 'aria-labelledby': labelId }}
                  />
                </ListItemIcon>
                <ListItemText id={labelId} primary={name} />
              </ListItemButton>
            </ListItem>
          );
        })}
      </List>
      <Modal
        open={open}
        handleClose={handleClose}
        title={t('confirmDeleteTask')}
        handleComplete={handlecomplete}
      />
    </>
  );
}
