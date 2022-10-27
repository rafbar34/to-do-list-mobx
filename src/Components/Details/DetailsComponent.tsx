import React from 'react';
import {ToDoListProps} from '../../interfaces/ToDo';
import './DetailsComponent.scss';

export const DetailsComponent = ({
  setTitle,
  setDescription,
  setEndDate,
  title,
  description,
  endDate,
}: ToDoListProps) => {
  return (
    <div className='card-details'>
      <div className='header-details'>Details</div>
      <div className='box-props'>
        <div>Title</div>
        <div className='box-title'>
          <input
            type='text'
            value={title}
            onChange={(e) => {
              if (setTitle) setTitle(e.target?.value);
            }}
            maxLength={20}
          />
        </div>
        <div>Description</div>
        <div className='box-description'>
          <textarea
            className='textarea-description'
            value={description}
            onChange={(e) => {
              if (setDescription) setDescription(e.target.value);
            }}
            rows={8}
            maxLength={500}
          />
        </div>
        <div>End task</div>
        <div className='input-endDate'>
          <input
            type='date'
            value={endDate}
            onChange={(e) => {
              if (setEndDate) setEndDate(e.target.value);
            }}
          />
        </div>
      </div>
    </div>
  );
};
