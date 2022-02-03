const express = require("express");
const {
  getAllBlogs,
  getBlogDetails,
  getAdminBlogs,
  createBlog,
  updateBlog,
  deleteBlog,
} = require("../controllers/blogCtrl");

const router = express.Router();

router.route("/blogs").get(getAllBlogs);
router.route("/blog/:id").get(getBlogDetails);

router.route("/admin/blogs").get(getAdminBlogs);

router.route("/admin/blog").post(createBlog);

router.route("/admin/blog/:id").put(updateBlog).delete(deleteBlog);

module.exports = router;
