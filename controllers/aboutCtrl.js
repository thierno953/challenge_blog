const About = require("../models/aboutModel");
const catchAsyncErrors = require("../middleware/catchAsyncErrors");
const ErrorHander = require("../utils/errorHander");

// create
exports.createAbout = catchAsyncErrors(async (req, res) => {
  // req.body.user = req.user.id;

  const about = await About.create(req.body);

  res.status(200).json({ success: true, about });
});

// all
exports.getAllAbouts = catchAsyncErrors(async (req, res) => {
  const abouts = await About.find();

  res.status(200).json({ success: true, abouts });
});

// all admin
exports.getAdminAbouts = catchAsyncErrors(async (req, res) => {
  const abouts = await About.find();

  res.status(200).json({ success: true, abouts });
});

// detail
exports.getAboutDetails = catchAsyncErrors(async (req, res, next) => {
  const about = await About.findById(req.params.id);

  if (!about) {
    return next(ErrorHander("About not found"));
  }
  res.status(200).json({ success: true, about });
});

// update

exports.updateAbout = catchAsyncErrors(async (req, res, next) => {
  let about = await about.findById(req.params.id);

  if (!about) {
    return next(new ErrorHander("About not found", 404));
  }

  about = await About.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
    runValidators: true,
    useFindAndModify: false,
  });

  res.status(200).json({
    success: true,
    about,
  });
});

// delete
exports.deleteAbout = catchAsyncErrors(async (req, res, next) => {
  const about = await About.findById(req.params.id);
  if (!about) {
    return next(ErrorHander("About not found", 404));
  }

  await about.remove();

  res.status(200).json({
    success: true,
    message: "About Delete Successfully",
  });
});
