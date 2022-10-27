import {toJS} from 'mobx';
import {observer} from 'mobx-react';
import React from 'react';
import {ToDoListProps} from '../../interfaces/ToDo';
import './ListComponent.scss';
export const ListComponent = observer(
  ({
    homeStore,
    title,
    description,
    endDate,
    setTitle,
    setDescription,
    setEndDate,
  }: ToDoListProps) => {
    return (
      <div className='card-list'>
        <div className='header-list'>List</div>
        <div className='box-details'>
          <button
            onClick={() => {
              homeStore.addTodo(title, description, endDate, {
                setTitle,
                setDescription,
                setEndDate,
              });
            }}
            className='add-button'>
            <b>Add</b>
          </button>
        </div>
        <div className='box-list'>
          <div className='box-card'>
            <div className='box-props'>Title</div>
            <div className='box-props'>Description</div>
            <div className='box-props'>Date end</div>
            <div className='box-props'>Created at</div>
            <div className='box-props'>Buttons</div>
          </div>
          {toJS(homeStore.toDoList).map((toDoItems: any) => (
            <>
              <div
                className='box-card'
                key={toDoItems.id}
                onClick={() => {
                  homeStore.chooseItem(toDoItems.id, {
                    setTitle,
                    setDescription,
                    setEndDate,
                  });
                }}>
                <div className='box-props'>
                  {toDoItems.title.length < 7
                    ? toDoItems.title
                    : toDoItems.title.slice(0, 7) + '...'}
                </div>
                <div className='box-props description'>
                  {toDoItems.description.length < 7
                    ? toDoItems.description
                    : toDoItems.description.slice(0, 7) + '...'}
                </div>
                <div className='box-props'>{toDoItems.endDate}</div>
                <div className='box-props'>{`${toDoItems.startDate?.getFullYear()}-${
                  toDoItems.startDate?.getMonth() + 1
                }-${toDoItems.startDate?.getDate()}`}</div>
                <div>
                  <button
                    className='details'
                    onClick={() => {
                      homeStore.handleEdit(toDoItems.id, {
                        title,
                        description,
                        endDate,
                      });
                    }}>
                    Edit
                  </button>
                  <button
                    className='details'
                    onClick={() => {
                      homeStore.handleDelete(toDoItems.id, {
                        setTitle,
                        setDescription,
                        setEndDate,
                      });
                    }}>
                    Remove
                  </button>
                </div>
              </div>
            </>
          ))}
        </div>
      </div>
    );
  }
);
