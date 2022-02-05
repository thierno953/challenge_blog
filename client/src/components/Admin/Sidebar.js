import React from 'react';
import { Link } from "react-router-dom";
import { TreeView, TreeItem } from "@material-ui/lab";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import PostAddIcon from "@material-ui/icons/PostAdd";
import AddIcon from "@material-ui/icons/Add";
import ImportExportIcon from "@material-ui/icons/ImportExport";
import DashboardIcon from "@material-ui/icons/Dashboard";
import PeopleIcon from "@material-ui/icons/People";
import './Sidebar.css'


const Sidebar = () => {
  return (
    <div className="sidebar">
    <Link to="/admin/dashboard">
      <p className="desh">
        <DashboardIcon /> Dashboard
      </p>
    </Link>
    <Link>
      <TreeView
        defaultCollapseIcon={<ExpandMoreIcon />}
        defaultExpandIcon={<ImportExportIcon />}
      >
        <TreeItem nodeId="1" label="Blogs">
          <Link to="/admin/blogs">
            <TreeItem nodeId="2" label="All" icon={<PostAddIcon />} />
          </Link>

          <Link to="/admin/blog">
            <TreeItem nodeId="3" label="Create" icon={<AddIcon />} />
          </Link>
        </TreeItem>
      </TreeView>
    </Link>


    <Link to="/admin/users">
      <p>
        <PeopleIcon /> Users
      </p>
    </Link>

  </div>
  )
};

export default Sidebar;
