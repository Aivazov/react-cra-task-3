import { Material } from '../components/Material/Material';

export const Materials = ({ listItems, ...otherProps }) => {
  return (
    <ul>
      {listItems.map((item) => (
        <li key={item.id}>
          <Material item={item} {...otherProps} />
          {/* <p>
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
          </button> */}
        </li>
      ))}
    </ul>
  );
};
