export interface TaskFormValues {
  task: string;
}

export interface BasicModalProps {
  open: boolean;
  handleClose: () => void;
  title: string;
  handleCreate: (newTask: string) => void;
  handleUpdate: (id: number, newTask: string) => void;
  defaultValues: TaskFormValues;
  id: number;
}
