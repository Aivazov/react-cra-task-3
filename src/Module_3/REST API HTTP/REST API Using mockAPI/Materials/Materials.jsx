import './Materials.css';
import { RiDeleteBin6Line } from 'react-icons/ri';

export const Materials = ({ listItems, onDelete }) => {
  return (
    <ul>
      {listItems.map((item) => (
        <li key={item.id}>
          <p>
            <b>Name:</b> {item.name}
          </p>
          <p>
            <b>Link:</b> {item.avatar}
          </p>
          <button type="button" className='remove-button' onClick={() => onDelete(item.id)}>
            <RiDeleteBin6Line />
          </button>
        </li>
      ))}
    </ul>
  );
};
