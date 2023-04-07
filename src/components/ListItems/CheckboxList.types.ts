export interface CheckboxListProps {
  tasks: Task[];
  deleteItem: (id: number) => void;
  completeItem: (id: number) => void;
  updateTask: (id: number, name: string) => void;
}

interface Task {
  id: number;
  name: string;
  completed: boolean;
}
