const Header = require("../models/headerModel");
const catchAsyncErrors = require("../middleware/catchAsyncErrors");
const ErrorHander = require("../utils/errorHander");

// create
exports.createHeader = catchAsyncErrors(async (req, res) => {
  // req.body.user = req.user.id;

  const header = await Header.create(req.body);

  res.status(200).json({ success: true, header });
});

// all
exports.getAllHeaders = catchAsyncErrors(async (req, res) => {
  const headers = await Header.find();

  res.status(200).json({ success: true, headers });
});

// all admin
exports.getAdminHeaders = catchAsyncErrors(async (req, res) => {
  const headers = await Header.find();

  res.status(200).json({ success: true, headers });
});

// detail
exports.getheaderDetails = catchAsyncErrors(async (req, res, next) => {
  const header = await Header.findById(req.params.id);

  if (!header) {
    return next(ErrorHander("Header not found"));
  }
  res.status(200).json({ success: true, header });
});

// update

exports.updateHeader = catchAsyncErrors(async (req, res, next) => {
  let header = await Header.findById(req.params.id);

  if (!header) {
    return next(new ErrorHander("Header not found", 404));
  }

  header = await Header.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
    runValidators: true,
    useFindAndModify: false,
  });

  res.status(200).json({
    success: true,
    header,
  });
});

// delete
exports.deleteHeader = catchAsyncErrors(async (req, res, next) => {
  const header = await Header.findById(req.params.id);
  if (!header) {
    return next(ErrorHander("Header not found", 404));
  }

  await header.remove();

  res.status(200).json({
    success: true,
    message: "About Delete Successfully",
  });
});
