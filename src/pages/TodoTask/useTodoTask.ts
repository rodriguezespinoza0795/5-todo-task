import { useState, useEffect } from 'react';
import { isEmpty, last, includes, lowerCase } from 'lodash';
import { Task, TaskLocalstorage, TaskFormValues } from './TodoTask.types';
import { getItem, setItem } from '~/utils';

export const useTodoTask = (tabOption: number, handleOpen: () => void) => {
  const initialTasks = getItem('taskList');
  const parsedInitialTasks = initialTasks
    ? initialTasks.map((task: TaskLocalstorage) => ({
        ...task,
        dueDate: new Date(task.dueDate),
      }))
    : [];
  const [taskList, setTaskList] = useState<Task[]>(parsedInitialTasks);
  const [filteredTask, setFilteredTask] = useState<Task[]>([]);
  const [search, setSearch] = useState('');
  const [defaultValues, setDefaultValues] = useState<TaskFormValues>({
    task: '',
    dueDate: new Date(),
    category: { value: 0, label: '', color: '' },
  });
  const [id, setId] = useState(0);

  const createTask = (newTask: TaskFormValues) => {
    const newID = isEmpty(taskList) ? 1 : (last(taskList)?.id as number) + 1;
    const newTaskList = [...taskList, { ...newTask, id: newID, completed: false }];
    setTaskList(newTaskList);
  };

  const updateTask = (id: number, newTask: TaskFormValues) => {
    setTaskList(
      taskList.map((task) => {
        if (task.id === id) {
          return { ...task, ...newTask };
        }
        return task;
      }),
    );
  };

  const deteteTask = (id: number) => {
    setTaskList(taskList.filter((task) => task.id !== id));
  };

  const searchTask = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(event.target.value);
  };

  useEffect(() => {
    let taskType = taskList;
    if (search) {
      taskType = taskType.filter(({ task }) => includes(lowerCase(task), lowerCase(search)));
    }
    if (tabOption) {
      taskType = taskType.filter(({ completed }) => (tabOption === 2 ? completed : !completed));
    }
    setFilteredTask(taskType);
  }, [search, taskList, tabOption]);

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

  const handleUpdate = (id: number, data: TaskFormValues) => {
    setDefaultValues({ ...defaultValues, ...data });
    setId(id);
    handleOpen();
  };

  const handleCreate = () => {
    setDefaultValues({
      ...defaultValues,
      task: '',
      dueDate: new Date(),
      category: { value: 0, label: '', color: '' },
    });
    setId(0);
    handleOpen();
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
    updateTask,
    handleUpdate,
    handleCreate,
    id,
    defaultValues,
  };
};
