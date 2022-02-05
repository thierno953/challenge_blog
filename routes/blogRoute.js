const express = require("express");
const {
  getAllBlogs,
  getBlogDetails,
  getAdminBlogs,
  createBlog,
  updateBlog,
  deleteBlog,
} = require("../controllers/blogCtrl");
const { isAuthenticatedUser, authorizeRoles } = require("../middleware/auth");

const router = express.Router();

router.route("/blogs").get(getAllBlogs);
router.route("/blog/:id").get(getBlogDetails);

router
  .route("/admin/blogs")
  .get(isAuthenticatedUser, authorizeRoles("admin"), getAdminBlogs);

router
  .route("/admin/blog")
  .post(isAuthenticatedUser, authorizeRoles("admin"), createBlog);

router
  .route("/admin/blog/:id")
  .put(isAuthenticatedUser, authorizeRoles("admin"), updateBlog)
  .delete(isAuthenticatedUser, authorizeRoles("admin"), deleteBlog);

module.exports = router;
