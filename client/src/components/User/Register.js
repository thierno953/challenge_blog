import React, { useEffect, useState } from 'react';
import "./Register.css";
import { useDispatch, useSelector } from "react-redux";
import { useAlert } from "react-alert";
import { clearErrors, register } from '../../redux/actions/userAction';
import Loader from "../Loader/Loader";

const Register = ({ history }) => {
    const dispatch = useDispatch();
    const alert = useAlert();
  
    const { error, loading, isAuthenticated } = useSelector(
      (state) => state.user
    );

    const [user, setUser] = useState({
        name: "", email: "", password: ""
    });

    const { name, email, password } = user;

    const registerSubmit = (e) => {
        e.preventDefault();

        const formData = new FormData();

        formData.set("name", name);
        formData.set("email", email);
        formData.set("password", password);
        dispatch(register(formData));
    };

    const registerDataChange = (e) => {
      setUser({ ...user, [e.target.name]: e.target.value });
    };

    useEffect(() => {
      if (error) {
        alert.error(error);
        dispatch(clearErrors());
      }
  
      if (isAuthenticated) {
        history.push("/");
      }
    }, [dispatch, error, alert, history, isAuthenticated]);

  return (
    <div className="form_top">
    {loading ? (
      <Loader />
    ) : (
      <>
        <div className="form">
          <div className="form_grid">
            <form onSubmit={registerSubmit}>
              <input
                type="text"
                placeholder="Name"
                required
                name="name"
                value={name}
                onChange={registerDataChange}
              />

              <input
                type="email"
                placeholder="Email"
                required
                name="email"
                value={email}
                onChange={registerDataChange}
              />

              <input
                type="password"
                placeholder="Password"
                required
                name="password"
                value={password}
                onChange={registerDataChange}
              />
        
              <button type="submit" className="btn">
                Submit
              </button>
            </form>
          </div>
        </div>
      </>
    )}
  </div>
  )
};

export default Register;
