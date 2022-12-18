import './Materials.css';

export const Materials = ({ listItems }) => {
  return (
    <ul>
      {listItems.map((item) => (
        <li key={item.id}>
          <p><b>Name:</b> {item.name}</p>
          <p><b>Link:</b> {item.avatar}</p>
        </li>
      ))}
    </ul>
  );
};
