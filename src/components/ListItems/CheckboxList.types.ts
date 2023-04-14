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
  category: Category;
}
