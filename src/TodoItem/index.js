import './TodoItem.css';
import {CompleteIcon} from '../TodoIcon/CompleteIcon.js';
import {DeleteIcon} from '../TodoIcon/DeleteIcon.js';

function TodoItem({text,completed,onComplete,onDelete}) {
    return (
      <li className='TodoItem'>
        <CompleteIcon
          completed = {completed}
          onComplete = {onComplete}
        />
         {/*<span className={`Icon Icon-check ${ completed && 'Icon-check--active'}`} onClick={onComplete}>V {completed}</span>*/}
        <p className={`TodoItem-p ${completed && 'TodoItem-p--complete'}`}>{text}</p>
        <DeleteIcon
         onDelete={onDelete}
        />
        {/*<span className='Icon Icon-delete' onClick={onDelete}>X</span>*/}
      </li>
    );
  }; 

  export {TodoItem}

  