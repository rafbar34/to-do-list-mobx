import {observer} from 'mobx-react';
import {toJS} from 'mobx';
import React, {useState} from 'react';
import './HomeStyles.scss';
import {DetailsComponent} from '../../Components/Details/DetailsComponent';
import {ListComponent} from '../../Components/List/ListComponent';

export const HomePage = observer(({homeStore}: any) => {
  const [title, setTitle] = useState('');
  const [endDate, setEndDate] = useState('');
  const [description, setDescription] = useState('');

  return (
    <div className='container-box'>
      <div className='container'>
        <div className='box'>
          <DetailsComponent
            title={title}
            endDate={endDate}
            description={description}
            setTitle={setTitle}
            setEndDate={setEndDate}
            setDescription={setDescription}
          />
          <ListComponent
            homeStore={homeStore}
            title={title}
            endDate={endDate}
            description={description}
            setTitle={setTitle}
            setEndDate={setEndDate}
            setDescription={setDescription}
          />
        </div>
      </div>
    </div>
  );
});
