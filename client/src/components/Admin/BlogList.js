import React, { useEffect } from "react";
import "./BlogList.css";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { useAlert } from "react-alert";
import EditIcon from "@material-ui/icons/Edit";
import DeleteIcon from "@material-ui/icons/Delete";
import { DataGrid } from "@material-ui/data-grid";
import Sidebar from "./Sidebar";
import { clearErrors, deleteBlog, getAdminBlog } from "../../redux/actions/blogAction";
import { DELETE_BLOG_RESET } from "../../redux/constants/blogConstant";


const BlogList = ({ history }) => {
  const alert = useAlert();
  const dispatch = useDispatch();
  const { error, blogs } = useSelector((state) => state.blogs);
  const { error: deleteError, isDeleted } = useSelector((state) => state.blog);

  const deleteProductHandler = (id) => {
    dispatch(deleteBlog(id));
  };

  useEffect(() => {
    if (error) {
      alert.error(error);
      dispatch(clearErrors());
    }

    if (deleteError) {
      alert.error(deleteError);
      dispatch(clearErrors());
    }

    if (isDeleted) {
      alert.success("blog Deleted Successfully");
      history.push("/admin/dashboard");
      dispatch({ type: DELETE_BLOG_RESET });
    }

    dispatch(getAdminBlog());
  }, [dispatch, alert, error, deleteError, history, isDeleted]);

  const columns = [
    { field: "id", headerName: "Blog ID", minWidth: 200, flex: 0.5 },

    {
      field: "title",
      headerName: "Title",
      minWidth: 200,
      flex: 1,
    },
    {
      field: "description",
      headerName: "Description",
      type: "number",
      minWidth: 350,
      flex: 0.3,
    },


    {
      field: "actions",
      flex: 0.3,
      headerName: "Actions",
      minWidth: 150,
      type: "number",
      sortable: false,
      renderCell: (params) => {
        return (
          <>
            <Link to={`/admin/blog/${params.getValue(params.id, "id")}`}>
              <EditIcon />
            </Link>

            <Link
              onClick={() =>
                deleteProductHandler(params.getValue(params.id, "id"))
              }
            >
              <DeleteIcon />
            </Link>
          </>
        );
      },
    },
  ];

  const rows = [];

  blogs &&
    blogs.forEach((item) => {
      rows.push({
        id: item._id,
        title: item.title,
        description: item.description,
      });
    });

  return (
    <>
      <div className="dashboard">
        <div className="dashboard_content">
          <Sidebar />
          <div className="productListContainer">
            <h1 id="productListHeading">ALL blogS</h1>

            <DataGrid
              rows={rows}
              columns={columns}
              pageSize={10}
              disableSelectionOnClick
              className="productListTable"
              autoHeight
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default BlogList;
