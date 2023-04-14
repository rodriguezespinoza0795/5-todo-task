export interface Task {
  id: number;
  task: string;
  completed: boolean;
  dueDate: Date;
  category: Category;
}

export interface TaskLocalstorage {
  id: number;
  task: string;
  completed: boolean;
  dueDate: string;
  category: Category;
}

export interface TaskFormValues {
  task: string;
  dueDate: Date;
  category: Category;
}

export interface Category {
  value: number;
  label: string;
  color: string;
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
