import '../../Materials/Materials.css';
import { RiDeleteBin6Line } from 'react-icons/ri';
import { IoMdAddCircleOutline } from 'react-icons/io';
import { Component } from 'react';

const EditMaterialModal = ({ onClose, onUpdate }) => {
  return (
    <div>
      <p>This is a modal</p>
      <button
        type="button"
        onClick={() => {
          onUpdate();
          onClose();
        }}>
        Edit
      </button>
      <button type="button" onClick={onClose}>
        Close
      </button>
    </div>
  );
};

export class Material extends Component {
  state = {
    isModalOpen: false,
  };

  openModal = () => {
    this.setState({ isModalOpen: true });
  };
  closeModal = () => {
    this.setState({ isModalOpen: false });
  };

  render() {
    const { item, onUpdate, onDelete } = this.props;
    const { isModalOpen } = this.state;

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
          // onClick={() => onUpdate({ id: item.id, name: Date.now() })}>
          onClick={this.openModal}>
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
        {isModalOpen && (
          <EditMaterialModal
            onClose={this.closeModal}
            onUpdate={() => onUpdate({ id: item.id, name: Date.now() })}
          />
        )}
      </div>
    );
  }
}
