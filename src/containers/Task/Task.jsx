import React, { Component } from 'react';
import './Task.sass';


class Task extends Component {


  render () {
    const { data, closeTask, removeTask} = this.props;
    let classBlock = 'task';
    let classButton = 'btn';
    classBlock += data.done ? ' task_done' : '';
    classButton += data.done ? ' btn-primary' : ' btn-success';

    return (
      <div className={classBlock}>
        <span className="task__text">{data.text}</span>
        <div className="task__button-block" data-id={data.index}>
          <button type='button' className={classButton} onClick={closeTask}> {data.done ? 'Return' : 'Complete'}</button>
          <button type='button' className='btn btn-danger' onClick={removeTask}>Remove</button>
        </div>
      </div>
    )
  }
}

export default Task;
