import React, { useEffect } from "react";
import { useAlert } from "react-alert";
import { useDispatch, useSelector } from "react-redux";
import { clearErrors, getService } from "../../redux/actions/serviceAction";
import Loader from "../Loader/Loader";
import ServiceInfo from "./ServiceInfo";

const Service = () => {
    const alert = useAlert();
    const dispatch = useDispatch();
    const { services, loading, error } = useSelector((state) => state.services);
  
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
            {services &&
              services.map((item) => <ServiceInfo key={item._id} item={item} />)}
          </>
        )}
      </>
    );
};

export default Service;
