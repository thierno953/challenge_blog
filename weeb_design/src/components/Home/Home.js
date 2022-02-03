import React, { useEffect } from "react";

import { useAlert } from "react-alert";
import { useDispatch, useSelector } from "react-redux";
import { clearErrors, getHeader } from "../../redux/actions/headerAction";
import Loader from "../Loader/Loader";
import HomeInfo from "./HomeInfo";

const Home = () => {
  const alert = useAlert();
  const dispatch = useDispatch();
  const { headers, loading, error } = useSelector((state) => state.headers);

  useEffect(() => {
    if (error) {
      alert.error(error);
      dispatch(clearErrors());
    }

    dispatch(getHeader());
  }, [dispatch, error, alert]);

  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <>
          {headers &&
            headers.map((item) => <HomeInfo key={item._id} item={item} />)}
        </>
      )}
    </>
  );
};

export default Home;
