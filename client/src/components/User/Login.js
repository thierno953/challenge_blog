import React, { useEffect, useState } from "react";
import "./Register.css";
import { useDispatch, useSelector } from "react-redux";
import { useAlert } from "react-alert";
import { clearErrors, login } from "../../redux/actions/userAction";
import Loader from "../Loader/Loader";
import { Link } from "react-router-dom";

const Login = ({ history }) => {
  const alert = useAlert();
  const dispatch = useDispatch();
  const { error, loading, isAuthenticated } = useSelector(
    (state) => state.user
  );
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  useEffect(() => {
    if (isAuthenticated) {
      history.push("/");
    }
    if (error) {
      alert.error(error);
      dispatch(clearErrors);
    }
  }, [dispatch, error, alert, isAuthenticated, history]);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(login(email, password));
  };

  return (
    <div className="form_top">
      {loading ? (
        <Loader />
      ) : (
        <div className="form">
          <div className="form_grid">
            <form onSubmit={handleSubmit}>
              <input
                type="email"
                placeholder="Email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />

              <input
                type="password"
                placeholder="Password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />

              <button type="submit" className="btn">
                Submit
              </button>
              <Link to="/register">Register</Link>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default Login;
