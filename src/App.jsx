import { useEffect, useState } from "react";
import "./App.css";
import "./components/styles/FormUser.css";
import useFerch from "./hooks/useFerch";
import FormUsers from "./components/FormUsers";
import CardUser from "./components/CardUser";

function App() {
  const [isClose, setIsClose] = useState(true);

  const [update, setUpdate] = useState();
  // const BaseUrl = "https://users-crud.academlo.tech/";

  // const [value, setvalue] = useState();

  const BaseUrl = "https://back-server-of7j.onrender.com/api/v1/";

  const [users, getAllUser, CreateUser, deleteUser, updateUser] =
    useFerch(BaseUrl);

  useEffect(() => {
    getAllUser("/users");
  }, []);
  console.log(users);
  const handleOpen = () => {
    setIsClose(false);
  };

  return (
    <>
      <div className="user_buton_container">
        <h1 className="user_title">User Crud</h1>
        <button className="open_btn" onClick={handleOpen}>
          <h2>Crear User</h2>
        </button>
      </div>

      <div className={`form_container ${isClose && "form_close"}`}>
        <FormUsers
          CreateUser={CreateUser}
          updateUser={updateUser}
          setupdate={setUpdate}
          update={update}
          setIsClose={setIsClose}
        />
      </div>

      <div className="card_container">
        {users?.map((user) => (
          <CardUser
            key={user.id}
            user={user}
            deleteUser={deleteUser}
            setupdate={setUpdate}
            setIsClose={setIsClose}
          />
        ))}
      </div>
    </>
  );
}

export default App;
