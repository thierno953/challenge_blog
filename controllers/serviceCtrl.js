const Service = require("../models/serviceModel");
const catchAsyncErrors = require("../middleware/catchAsyncErrors");
const ErrorHander = require("../utils/errorHander");

// create
exports.createService = catchAsyncErrors(async (req, res) => {
  // req.body.user = req.user.id;

  const service = await Service.create(req.body);

  res.status(200).json({ success: true, service });
});

// all
exports.getAllServices = catchAsyncErrors(async (req, res) => {
  const services = await Service.find();

  res.status(200).json({ success: true, services });
});

// all admin
exports.getAdminServices = catchAsyncErrors(async (req, res) => {
  const services = await Service.find();

  res.status(200).json({ success: true, services });
});

// detail
exports.getServiceDetails = catchAsyncErrors(async (req, res, next) => {
  const service = await Service.findById(req.params.id);

  if (!service) {
    return next(ErrorHander("service not found"));
  }
  res.status(200).json({ success: true, service });
});

// update

exports.updateService = catchAsyncErrors(async (req, res, next) => {
  let service = await Service.findById(req.params.id);

  if (!service) {
    return next(new ErrorHander("Service not found", 404));
  }

  service = await Service.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
    runValidators: true,
    useFindAndModify: false,
  });

  res.status(200).json({
    success: true,
    service,
  });
});

// delete
exports.deleteService = catchAsyncErrors(async (req, res, next) => {
  const service = await Service.findById(req.params.id);
  if (!service) {
    return next(ErrorHander("Service not found", 404));
  }

  await service.remove();

  res.status(200).json({
    success: true,
    message: "Service Delete Successfully",
  });
});
