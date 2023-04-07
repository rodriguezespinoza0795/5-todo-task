export interface TaskFormValues {
  task: string;
  dueDate: Date;
}

export interface CheckboxListProps {
  tasks: Task[];
  deleteItem: (id: number) => void;
  completeItem: (id: number) => void;
  updateTask: (id: number, data: TaskFormValues) => void;
}

interface Task {
  id: number;
  task: string;
  completed: boolean;
  dueDate: Date;
}
