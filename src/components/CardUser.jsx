/* eslint-disable react/prop-types */

// eslint-disable-next-line no-unused-vars
const CardUser = ({ user, deleteUser, setupdate, setIsClose }) => {
  const fechaFormateada = new Date(user.birthday).toISOString().split("T")[0];
  const handleDelete = () => {
    deleteUser("/users", user.id);
  };
  const handleUpdate = () => {
    setIsClose(false);
    setupdate(user);
  };
  return (
    <article className="card_article">
      <h2 className="name">{`${user.first_name} ${user.last_name}`}</h2>
      <ul>
        <li>
          <span className="title_card">Email: </span>
          <span>{user.email}</span>
        </li>
        <li>
          <span className="title_card">Birthday: </span>
          <span>{fechaFormateada}</span>
        </li>
      </ul>
      <button className="btn_delete" onClick={handleDelete}>
        <i className="bx bxs-trash"></i>
      </button>
      <button className="btn_update" onClick={handleUpdate}>
        <i className="bx bx-edit"></i>
      </button>
    </article>
  );
};

export default CardUser;
