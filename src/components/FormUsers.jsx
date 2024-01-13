/* eslint-disable react/prop-types */
import { useEffect } from "react";
import { useForm } from "react-hook-form";

const FormUsers = ({
  CreateUser,
  update,
  updateUser,
  setupdate,
  setIsClose,
}) => {
  const { register, handleSubmit, reset } = useForm();

  const submit = (data) => {
    if (update) {
      updateUser("/users", update.id, data);
      setupdate();
    } else {
      CreateUser("/users", data);
    }

    reset({
      email: "",
      password: "",
      first_name: "",
      last_name: "",
      birthday: "",
    });
    setIsClose(true);
  };

  useEffect(() => {
    reset(update);
  }, [update]);

  const handleClose = () => {
    setIsClose(true);
  };

  return (
    <form className="form" onSubmit={handleSubmit(submit)}>
      <button className="close_btn" onClick={handleClose}>
        <i className="bx bx-x"></i>
      </button>
      <h2 className="form_title">Form Users</h2>
      <div className="form_section">
        <label className="form_label" htmlFor="email">
          Email
        </label>
        <input
          className="form_input"
          {...register("email")}
          id="email"
          type="text"
        />
      </div>
      <div className="form_section">
        <label className="form_label" htmlFor="password">
          Password
        </label>
        <input
          className="form_input"
          {...register("password")}
          id="password"
          type="password"
        />
      </div>
      <div className="form_section">
        <label className="form_label" htmlFor="first_name">
          First Name
        </label>
        <input
          className="form_input"
          {...register("first_name")}
          id="first_name"
          type="text"
        />
      </div>
      <div className="form_section">
        <label className="form_label" htmlFor="last_name">
          Last Name
        </label>
        <input
          className="form_input"
          {...register("last_name")}
          id="last_name"
          type="text"
        />
      </div>
      <div className="form_section">
        <label className="form_label" htmlFor="birthday">
          Birthday
        </label>
        <input
          className="form_input"
          {...register("birthday")}
          id="birthday"
          type="date"
        />
      </div>
      <button className="form_btn">{update ? "Update" : "Create"}</button>
    </form>
  );
};

export default FormUsers;
