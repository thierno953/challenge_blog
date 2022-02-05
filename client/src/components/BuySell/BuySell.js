import React, { useEffect } from "react";
import { useAlert } from "react-alert";
import { useDispatch, useSelector } from "react-redux";
import { clearErrors, getAbout } from "../../redux/actions/aboutAction";
import Loader from "../Loader/Loader";
import BuySellInfo from "./BuySellInfo";

const BuySell = () => {
    const alert = useAlert();
    const dispatch = useDispatch();
    const { abouts, loading, error } = useSelector((state) => state.abouts);
  
    useEffect(() => {
      if (error) {
        alert.error(error);
        dispatch(clearErrors());
      }
  
      dispatch(getAbout());
    }, [dispatch, error, alert]);
  
    return (
      <>
        {loading ? (
          <Loader />
        ) : (
          <>
            {abouts &&
              abouts.map((item) => <BuySellInfo key={item._id} item={item} />)}
          </>
        )}
      </>
    );
};

export default BuySell;
