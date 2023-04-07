import {
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Checkbox,
  IconButton,
  Tooltip,
  Button,
  Box,
} from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import { useTranslation } from 'react-i18next';
import { format } from 'date-fns';
import { CheckboxListProps } from './CheckboxList.types';
import { useModal } from '~/hooks';
import { Modal } from '~/components';

export default function CheckboxList({
  tasks,
  deleteItem,
  completeItem,
  updateTask,
}: CheckboxListProps) {
  const { t } = useTranslation('common');
  const { open, handleClose, handleConfirm, handleComplete } = useModal(deleteItem);

  return (
    <>
      <List
        sx={{
          width: '100%',
        }}
      >
        {tasks.map(({ task, id, completed, dueDate }) => {
          const labelId = `checkbox-list-label-${id}`;

          return (
            <ListItem
              key={id}
              secondaryAction={
                <>
                  <Tooltip title={t('edit')}>
                    <IconButton
                      edge='end'
                      aria-label='comments'
                      onClick={() => updateTask(id, { task: task, dueDate: dueDate })}
                    >
                      <EditIcon />
                    </IconButton>
                  </Tooltip>
                  <Tooltip title={t('delete')}>
                    <IconButton edge='end' aria-label='comments' onClick={() => handleConfirm(id)}>
                      <DeleteIcon />
                    </IconButton>
                  </Tooltip>
                </>
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
                <ListItemText
                  id={labelId}
                  primary={task}
                  secondary={format(dueDate, 'MM/dd/yyyy')}
                  sx={{ marginRight: '15px' }}
                />
              </ListItemButton>
            </ListItem>
          );
        })}
      </List>
      <Modal open={open} handleClose={handleClose} title={t('confirmDeleteTask')}>
        <Box sx={{ display: 'flex', width: '100%', gap: '20px' }}>
          <Button fullWidth variant='outlined' sx={{ mt: 1.5 }} onClick={handleClose} color='error'>
            {t('cancel')}
          </Button>
          <Button fullWidth variant='contained' sx={{ mt: 1.5 }} onClick={handleComplete}>
            {t('confirm')}
          </Button>
        </Box>
      </Modal>
    </>
  );
}
