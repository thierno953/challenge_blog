import React, { useEffect } from "react";
import styled from "styled-components";
import { useAlert } from "react-alert";
import { useDispatch, useSelector } from "react-redux";
import { clearErrors, getBlog } from "../../redux/actions/blogAction";
import Loader from "../Loader/Loader";
import { Link } from "react-router-dom";


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
          <div className="blogs">
            {blogs &&
              blogs.map((item) => 
              <div className="blog" key={item._id}>
                <Link to={`/item/${item._id}`} className="read">
               <img src={item.images} alt={item.title} />
              <div className="data">
                <h6>31 Jan, 2021</h6>
                <h4>{item.title}</h4>
                <p>  {item.description}</p>
              </div>
              </Link>
              </div>)}
          </div>
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
        width: 100%;
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
