export interface Task {
  id: number;
  task: string;
  completed: boolean;
  dueDate: Date;
}

export interface TaskLocalstorage {
  id: number;
  task: string;
  completed: boolean;
  dueDate: string;
}

export interface TaskFormValues {
  task: string;
  dueDate: Date;
}

export interface BasicModalProps {
  open: boolean;
  handleClose: () => void;
  title: string;
  handleCreate: (task: TaskFormValues) => void;
  handleUpdate: (id: number, task: TaskFormValues) => void;
  defaultValues: TaskFormValues;
  id: number;
}
