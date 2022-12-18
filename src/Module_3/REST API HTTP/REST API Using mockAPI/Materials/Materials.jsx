import './Materials.css';

export const Materials = ({ listItems }) => {
  return (
    <ul>
      {listItems.map((item) => (
        <li key={item.id}>
          <p>Name: {item.name}</p>
          <p>Link: {item.avatar}</p>
        </li>
      ))}
    </ul>
  );
};
