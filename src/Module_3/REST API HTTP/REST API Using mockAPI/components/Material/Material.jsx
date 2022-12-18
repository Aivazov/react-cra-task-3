import '../../Materials/Materials.css';
import { RiDeleteBin6Line } from 'react-icons/ri';
import { IoMdAddCircleOutline } from 'react-icons/io';

export const Material = ({ item, onUpdate, onDelete }) => {
  return (
    <div>
      <p>
        <b>Name:</b> {item.name}
      </p>
      <p>
        <b>Link:</b> {item.avatar}
      </p>
      <button
        type="button"
        className="materials-buttons"
        onClick={() => onUpdate({ id: item.id, name: Date.now() })}>
        <IoMdAddCircleOutline />
        Edit Item
      </button>
      <button
        type="button"
        className="materials-buttons"
        onClick={() => onDelete(item.id)}>
        <RiDeleteBin6Line />
        Remove Item
      </button>
    </div>
  );
};
