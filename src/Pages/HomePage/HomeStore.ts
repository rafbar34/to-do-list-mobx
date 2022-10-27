import {Observer} from 'mobx-react';
import {makeObservable, observable, action, toJS} from 'mobx';
import React from 'react';
import {ToDoListProps, ToDoSetProps} from '../../interfaces/ToDo';

export class HomeStoreImpl {
  toDoList: any = [];
  constructor() {
    makeObservable(this, {
      toDoList: observable,
      addTodo: action,
      handleDelete: action,
      chooseItem: action,
      handleEdit: action,
    });
  }
  addTodo(
    title: string,
    description: string,
    endDate: string,
    {setTitle, setDescription, setEndDate}: ToDoSetProps
  ) {
    if (title == '') {
      alert('please, enter title');
      return;
    } else if (description == '') {
      alert('please, enter description');
      return;
    } else if (endDate == '') {
      alert('please, enter date');
      return;
    }
    const task: ToDoListProps = {
      id: +Math.random().toFixed(5),
      title,
      description,
      startDate: new Date(),
      endDate,
    };
    this.toDoList.push(task);
    setTitle('');
    setDescription('');
    setEndDate('');
  }
  handleDelete(
    id: number,
    {setTitle, setDescription, setEndDate}: ToDoSetProps
  ) {
    setTitle('');
    setDescription('');
    setEndDate('');
    return this.toDoList.replace(
      this.toDoList.filter((to: ToDoListProps) => to.id !== id)
    );
  }

  chooseItem(id: number, {setTitle, setDescription, setEndDate}: ToDoSetProps) {
    const editToDo = this.toDoList.find((i: ToDoListProps) => i.id == id);
    setTitle(editToDo.title);
    setDescription(editToDo.description);
    setEndDate(editToDo.endDate);
  }
  handleEdit(
    id: number,
    {
      title,
      description,
      endDate,
      setTitle,
      setDescription,
      setEndDate,
    }: ToDoListProps
  ) {
    const editToDo = this.toDoList.find((i: ToDoListProps) => i.id == id);
    const updatedToDo = this.toDoList.map((t: ToDoListProps) =>
      t.id === editToDo.id
        ? (t = {
            id: t.id,
            title: title,
            description: description,
            endDate: endDate,
            startDate: t.startDate,
          })
        : {
            id: t.id,
            title: t.title,
            description: t.description,
            endDate: t.endDate,
            startDate: t.startDate,
          }
    );
    this.toDoList.replace(updatedToDo);
    if (setTitle) setTitle('');
    if (setDescription) setDescription('');
    if (setEndDate) setEndDate('');
  }
}
export const HomeStore = new HomeStoreImpl();
