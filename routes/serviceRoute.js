const express = require("express");
const {
  getAllServices,
  getServiceDetails,
  getAdminServices,
  createService,
  updateService,
  deleteService,
} = require("../controllers/serviceCtrl");

const router = express.Router();

router.route("/services").get(getAllServices);
router.route("/service/:id").get(getServiceDetails);

router.route("/admin/services").get(getAdminServices);

router.route("/admin/service").post(createService);

router.route("/admin/service/:id").put(updateService).delete(deleteService);

module.exports = router;
