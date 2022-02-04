import React, { useEffect } from "react";
import { useAlert } from "react-alert";
import { useDispatch, useSelector } from "react-redux";
import { clearErrors, getService } from "../../redux/actions/serviceAction";
import Loader from "../Loader/Loader";
import ServiceInfo from "./ServiceInfo";

const Service = () => {
    const alert = useAlert();
    const dispatch = useDispatch();
    const { abouts, loading, error } = useSelector((state) => state.abouts);
  
    useEffect(() => {
      if (error) {
        alert.error(error);
        dispatch(clearErrors());
      }
  
      dispatch(getService());
    }, [dispatch, error, alert]);
  
    return (
      <>
        {loading ? (
          <Loader />
        ) : (
          <>
            {abouts &&
              abouts.map((item) => <ServiceInfo key={item._id} item={item} />)}
          </>
        )}
      </>
    );
};

export default Service;
