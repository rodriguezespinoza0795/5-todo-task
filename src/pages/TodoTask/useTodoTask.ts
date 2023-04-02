import { useState, useEffect } from 'react';
import { Task } from './TodoTask.types';
import { isEmpty, last, includes, lowerCase } from 'lodash';

export const useTodoTask = () => {
  const [taskList, setTaskList] = useState<Task[]>([]);
  const [filteredTask, setFilteredTask] = useState<Task[]>([]);
  const [search, setSearch] = useState('');

  const createTask = (newTask: string) => {
    const newID = isEmpty(taskList) ? 1 : (last(taskList)?.id as number) + 1;
    setTaskList([...taskList, { id: newID, name: newTask, completed: false }]);
  };

  const deteteTask = (id: number) => {
    setTaskList(taskList.filter((task) => task.id !== id));
  };

  const searchTask = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(event.target.value);
  };

  useEffect(() => {
    setFilteredTask(taskList.filter((task) => includes(lowerCase(task.name), lowerCase(search))));
  }, [search, taskList]);

  const completeTask = (id: number) => {
    setTaskList(
      taskList.map((task) => {
        if (task.id === id) {
          return { ...task, completed: !task.completed };
        }
        return task;
      }),
    );
  };

  return {
    taskList,
    filteredTask,
    deteteTask,
    completeTask,
    searchTask,
    createTask,
    search,
  };
};
