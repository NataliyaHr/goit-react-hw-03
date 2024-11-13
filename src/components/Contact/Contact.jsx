import s from "./Contact.module.css";
import { FaPhoneAlt } from "react-icons/fa";
import { FaUserLarge } from "react-icons/fa6";

const Contact = ({ name, number, id, onDelete }) => {
  return (
    <div className={s.container}>
      <div className={s.div}>
        <p className={s.text}>
          <FaUserLarge />
          {name}
        </p>
        <p className={s.text}>
          <FaPhoneAlt />
          {number}
        </p>
      </div>

      <button type="button" className={s.btn} onClick={() => onDelete(id)}>
        Delete
      </button>
    </div>
  );
};
export default Contact;