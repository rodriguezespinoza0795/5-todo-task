import {
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Checkbox,
  IconButton,
} from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import { CheckboxListProps } from './CheckboxList.types';

export default function CheckboxList({ tasks, deleteItem, completeItem }: CheckboxListProps) {
  return (
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
              <IconButton edge='end' aria-label='comments' onClick={() => deleteItem(id)}>
                <DeleteIcon />
              </IconButton>
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
  );
}
