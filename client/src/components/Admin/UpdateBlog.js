import React, { useEffect, useState } from 'react';
import './NewBlog.css';
import { useSelector, useDispatch } from "react-redux";
import { useAlert } from "react-alert";
import Sidebar from "./Sidebar";
import { Button } from "@material-ui/core";
import { clearErrors, getBlogDetails, updateBlog } from '../../redux/actions/blogAction';
import { UPDATE_BLOG_RESET } from '../../redux/constants/blogConstant';

const UpdateBlog = ({ history, match }) => {
    const dispatch = useDispatch();
    const alert = useAlert();
    const { error, blog } = useSelector((state) => state.blogDetail);
    const {
      loading,
      error: updateError,
      isUpdated,
    } = useSelector((state) => state.blog);
  
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [images, setImages] = useState([]);
    const [oldImages, setOldImages] = useState([]);
    const [imagesPreview, setImagesPreview] = useState([]);
  
    const blogId = match.params.id;
  
    useEffect(() => {
        if(blog && blog._id !== blogId) {
            dispatch(getBlogDetails(blogId));
        } else {
            setTitle(blog.title);
            setDescription(blog.description);
            setOldImages(blog.images);
        }
  
        if(error) {
            alert.error(error);
            dispatch(clearErrors());
        }
        if(updateError) {
            alert.error(updateError);
            dispatch(clearErrors());
        }
  
        if(isUpdated) {
          alert.success("blog Updated Successfully");
          history.push("/admin/blogs");
          dispatch({ type: UPDATE_BLOG_RESET });
        }
    }, [dispatch, alert, error, history, isUpdated, blogId, blog, updateError]);
  
    const updateblogSubmitHandler = (e) => {
      e.preventDefault();
  
      const formData = new FormData();
      formData.set("title", title);
      formData.set("description", description);
  
      images.forEach((image) => {
          formData.append("images", image);
      });
      dispatch(updateBlog(blogId, formData));
    };
  
    const updateblogImagesChange = (e) => {
      const files = Array.from(e.target.files);
  
      setImages([]);
      setImagesPreview([]);
      setOldImages([]);
  
      files.forEach((file) => {
        const reader = new FileReader();
  
        reader.onload = () => {
          if (reader.readyState === 2) {
            setImagesPreview((old) => [...old, reader.result]);
            setImages((old) => [...old, reader.result]);
          }
        };
  
        reader.readAsDataURL(file);
      });
    };
  
    return (
      <>
        <div className="dashboard">
          <div className="dashboard_content">
            <Sidebar className="sidebar" />
            <div className="newProductContainer">
              <form
                className="createProductForm"
                encType="multipart/form-data"
                onSubmit={updateblogSubmitHandler}
              >
                <h1>Update blog</h1>
  
                <div>
                  <input
                    type="text"
                    placeholder="Title"
                    required
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                  />
                </div>
                <div>
                  <textarea
                    placeholder="Description"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    cols="5"
                   
                  ></textarea>
                </div>
  
                <div id="createProductFormFile">
                  <input
                    type="file"
                    name="avatar"
                    accept="image/*"
                    onChange={updateblogImagesChange}
                    multiple
                  />
                </div>
  
                <div id="createProductFormImage">
                  {oldImages &&
                    oldImages.map((image, index) => (
                      <img
                        key={index}
                        src={image.url}
                        alt="Old blog Preview"
                      />
                    ))}
                </div>
  
                <div id="createProductFormImage">
                  {imagesPreview.map((image, index) => (
                    <img key={index} src={image} alt="blog Preview" />
                  ))}
                </div>
  
                <Button
                  id="createProductBtn"
                  type="submit"
                  disabled={loading ? true : false}
                >
                  Update
                </Button>
              </form>
            </div>
          </div>
        </div>
      </>
    )
  };
export default UpdateBlog;
