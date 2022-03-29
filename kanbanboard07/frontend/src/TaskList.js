import React from 'react';
import styles from './assets/css/TaskList.css';
import Task from './Task';

const TaskList = ({tasks}) => {
  return (
    <div className={styles.TaskList}>
        <ul>
            {tasks.map(task => <Task
                                    key={task.no}
                                    name={task.name}
                                    done={task.done} /> )}
            <input
              type='text'
              className={styles.TaskList__add_task}
              placeholder={'태스크 추가'}
              onKeyPress={e => {
                if(e.key === 'Enter') {
                  console.log(`call notifyAddTask(${e.target.value})`);
                }
              }}/>
        </ul>
    </div>     
  );
}

export default TaskList