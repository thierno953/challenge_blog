import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useAlert } from "react-alert";
import "./Detail.css";
import moment from "moment";
import Loader from "../Loader/Loader";
import { clearErrors, getBlogDetails } from "../../redux/actions/blogAction";


const Detail = ({ match }) => {
    const dispatch = useDispatch();
    const alert = useAlert();
    const { blog, loading, error } = useSelector((state) => state.blogDetail);
  
    useEffect(() => {
      if (error) {
        alert.error(error);
        dispatch(clearErrors());
      }
  
      dispatch(getBlogDetails(match.params.id));
    }, [dispatch, match.params.id, error, alert]);
  
    return (
      <div className="container_detail">
        {loading ? (
          <Loader />
        ) : (
          <>
            <div className="container_detail_info">
              <div className="content">
                <div className="content_flexis">
                  <div className="content_detail">
                  <>
                    {blog.images &&
                      blog.images.map((item, i) => (
                        <img
                          className="CarouselImage"
                          key={i}
                          src={item.url}
                          alt={item.title}
                        />
                      ))}
                  </>
                  </div>
                  <h6>{moment(blog.createdAt).fromNow()}</h6>
                  <div className="info">
                  <h2>{blog.title}</h2>
                  <p>{blog.description}</p>
                  </div>
                </div>
              </div>
            </div>
          </>
        )}
      </div>
    );
  };

export default Detail;
