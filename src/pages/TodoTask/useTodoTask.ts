import { useState, useEffect } from 'react';
import { isEmpty, last, includes, lowerCase } from 'lodash';
import { Task } from './TodoTask.types';
import { getItem, setItem } from '~/utils';

export const useTodoTask = (value: number) => {
  const initialTasks = getItem('taskList');
  const [taskList, setTaskList] = useState<Task[]>(initialTasks);
  const [filteredTask, setFilteredTask] = useState<Task[]>([]);
  const [search, setSearch] = useState('');

  const createTask = (newTask: string) => {
    const newID = isEmpty(taskList) ? 1 : (last(taskList)?.id as number) + 1;
    const newTaskList = [...taskList, { id: newID, name: newTask, completed: false }];
    setTaskList(newTaskList);
  };

  const deteteTask = (id: number) => {
    setTaskList(taskList.filter((task) => task.id !== id));
  };

  const searchTask = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(event.target.value);
  };

  useEffect(() => {
    console.log('value', value);
    let taskType = taskList;
    if ([1, 2].includes(value)) {
      taskType =
        value === 2
          ? taskList.filter(
              (task) => includes(lowerCase(task.name), lowerCase(search)) && task.completed,
            )
          : taskList.filter(
              (task) => includes(lowerCase(task.name), lowerCase(search)) && !task.completed,
            );
    }
    setFilteredTask(taskType.filter((task) => includes(lowerCase(task.name), lowerCase(search))));
  }, [search, taskList, value]);

  useEffect(() => {
    setItem('taskList', taskList);
  }, [taskList]);

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
    initialTasks,
  };
};
