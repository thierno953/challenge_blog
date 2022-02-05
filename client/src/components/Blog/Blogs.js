import React, { useEffect } from "react";
import styled from "styled-components";
import { useAlert } from "react-alert";
import { useDispatch, useSelector } from "react-redux";
import { clearErrors, getBlog } from "../../redux/actions/blogAction";
import Loader from "../Loader/Loader";
import { Link } from "react-router-dom";
import moment from "moment";


const Blogs = () => {
    const alert = useAlert();
    const dispatch = useDispatch();
    const { blogs, loading, error } = useSelector((state) => state.blogs);
  
    useEffect(() => {
      if (error) {
        alert.error(error);
        dispatch(clearErrors());
      }
  
      dispatch(getBlog());
    }, [dispatch, error, alert]);
  
    return (
      <Section id="blogs">
        {loading ? (
          <Loader />
        ) : (
          <>
            <div className="title">
        <h2>News & Blogs</h2>
        <h5>A bit of history </h5>
      </div>
          <div className="blogs">
            {blogs &&
              blogs.map((blog) => 
              <div className="blog" key={blog._id}>
               <Link to={`/blog/${blog._id}`}>
               <img src={blog.images[0].url} alt={blog.title} />
              <div className="data">
                <h6>{moment(blog.createdAt).fromNow()}</h6>
                <h4>{blog.title}</h4>
             
              </div>
              </Link>
              </div>)}
          </div>
          </>
        )}
      </Section>
    );
};



const Section = styled.section`
  margin: 4rem 10rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;
  .title {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 0.3rem;
  }
  .blogs {
    display: flex;
    gap: 5rem;
    .blog {
      display: flex;
      align-items: center;
      gap: 1rem;
      flex-direction: column;
      background-color: rgba(0, 0, 0, 0.3);
      border-bottom: 0.5rem transparent solid;
      transition: 0.3s ease-in-out;
      &:hover {
        border-color: var(--primary-color);
      }
      img {
        width: 99%;
      }
      .data {
        padding: 1rem;
        gap: 1rem;
        display: flex;
        flex-direction: column;
        p {
          font-size: 0.9rem;
          font-weight: 100;
        }
      }
    }
  }
  @media screen and (min-width: 280px) and (max-width: 1080px) {
    margin: 2rem 1rem;
    .title {
      h2 {
        font-size: 2.4rem;
        color: var(--primary-color);
      }
    }
    .blogs {
      flex-direction: column;
      gap: 2rem;
    }
  }
`;

export default Blogs;
