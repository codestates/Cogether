import { useSelector, useDispatch } from 'react-redux';
import { setRequireModal } from '../actions/index';
import Require from './Require';
import '../scss/Modal.scss';

const RequireModal = () => {
  const Requires = useSelector((state) => state.userReducer);
  const confirm = useSelector((state) => state.messageReducer);
  const { isRequireModalOpen } = Requires;
  const { confirmModal } = confirm;
  const dispatch = useDispatch();
  const closeModal = () => {
    dispatch(setRequireModal(false));
  };

  return (
    <>
      {isRequireModalOpen ? (
        <div className="RequireModal">
          <div className="ModalMain" onClick={closeModal} />
          <div className={confirmModal.isOpen ? 'DubleModalBox' : 'ModalBox'}>
            <Require />
          </div>
        </div>
      ) : null}
    </>
  );
};

export default RequireModal;
