import s from "./SearchBox.module.css";
const Searchbox = ({ value, onChange }) => {
  return (
    <div className={s.div}>
      <p>Find contacts by name</p>
      <input
        className={s.input}
        type="text"
        value={value}
        onChange={onChange}
      />
    </div>
  );
};

export default Searchbox;