const Blog = require("../models/blogModel");
const catchAsyncErrors = require("../middleware/catchAsyncErrors");
const ErrorHander = require("../utils/errorHander");

// create
exports.createBlog = catchAsyncErrors(async (req, res) => {
  // req.body.user = req.user.id;

  const blog = await Blog.create(req.body);

  res.status(200).json({ success: true, blog });
});

// all
exports.getAllBlogs = catchAsyncErrors(async (req, res) => {
  const blogs = await Blog.find();

  res.status(200).json({ success: true, blogs });
});

// all admin
exports.getAdminBlogs = catchAsyncErrors(async (req, res) => {
  const blogs = await Blog.find();

  res.status(200).json({ success: true, blogs });
});

// detail
exports.getBlogDetails = catchAsyncErrors(async (req, res, next) => {
  const blog = await Blog.findById(req.params.id);

  if (!blog) {
    return next(ErrorHander("Blog not found"));
  }
  res.status(200).json({ success: true, blog });
});

// update

exports.updateBlog = catchAsyncErrors(async (req, res, next) => {
  let blog = await Blog.findById(req.params.id);

  if (!blog) {
    return next(new ErrorHander("Blog not found", 404));
  }

  blog = await Blog.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
    runValidators: true,
    useFindAndModify: false,
  });

  res.status(200).json({
    success: true,
    blog,
  });
});

// delete
exports.deleteBlog = catchAsyncErrors(async (req, res, next) => {
  const blog = await Blog.findById(req.params.id);
  if (!blog) {
    return next(ErrorHander("Blog not found", 404));
  }

  await blog.remove();

  res.status(200).json({
    success: true,
    message: "blog Delete Successfully",
  });
});
