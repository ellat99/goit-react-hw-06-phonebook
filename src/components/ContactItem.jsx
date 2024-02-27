import { deleteContact } from '../redux/ContactSlide';

import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
//primeste propr name,number,id ca argumente
function ContactItem({ name, number, id }) {
  const dispatch = useDispatch();
  //aceasta functie e apelata at cand utilizatorul da clic pe delete
  const onDelete = () => {
    //Utilizează dispecerul Redux (dispatch) pentru a dispașa acțiunea deleteContact
    // cu ID-ul contactului care trebuie șters.
    dispatch(deleteContact({ id }));
  };

  return (
    <div>
      <p>
        {name}: {number}
      </p>
      <button onClick={onDelete}>Delete</button>
    </div>
  );
}
ContactItem.propTypes = {
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
};

export default ContactItem;
