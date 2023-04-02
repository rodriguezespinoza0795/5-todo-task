export interface CheckboxListProps {
  tasks: Task[];
  deleteItem: (id: number) => void;
  completeItem: (id: number) => void;
}

interface Task {
  id: number;
  name: string;
  completed: boolean;
}
