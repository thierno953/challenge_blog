import React, { useEffect } from 'react';
import './Dashboard.css';
import { Link } from "react-router-dom";

import { useDispatch, useSelector } from 'react-redux';
import { getAdminBlog } from '../../redux/actions/blogAction';
import Sidebar from './Sidebar';

const Dashboard = () => {
  const dispatch = useDispatch();
  const { blogs } = useSelector((state) => state.blogs);

  useEffect(() => {
    dispatch(getAdminBlog());
  }, [dispatch]);

  return (
    <div className="dashboard">
    <div className="dashboard_content">
     <div className="sidebar">
     <Sidebar className="sidebar" />
     </div>

      <div className="dashboardContainer">
        <h1>
        Dashboard
        </h1>

        <div className="dashboardSummary">
          <div className="dashboardSummaryBox2">
            <Link to="/admin/blogs">
              <p>Blogs</p>
              <p>{blogs && blogs.length}</p>
            </Link>
      
            <Link to="/admin/users">
              <p>Users</p>
              <p>4</p>
            </Link>
          </div>
        </div>
     
      </div>
    </div>
  </div>
  )
};

export default Dashboard;
