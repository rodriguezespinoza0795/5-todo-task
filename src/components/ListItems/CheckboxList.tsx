import {
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Checkbox,
  Paper,
  IconButton,
} from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';

interface CheckboxListProps {
  tasks: Task[];
  deleteItem: (id: number) => void;
  completeItem: (id: number) => void;
}

export interface Task {
  id: number;
  name: string;
  completed: boolean;
}

export default function CheckboxList({ tasks, deleteItem, completeItem }: CheckboxListProps) {
  return (
    <Paper sx={{ padding: '1.2em', borderRadius: '0.5em' }}>
      <List
        sx={{
          width: '100%',
          height: '30vh',
          overflow: 'scroll',
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
    </Paper>
  );
}
