const express = require("express");
const {
  deleteHeader,
  updateHeader,
  getheaderDetails,
  getAdminHeaders,
  createHeader,
  getAllHeaders,
} = require("../controllers/headerCtrl");

const router = express.Router();

router.route("/headers").get(getAllHeaders);
router.route("/header/:id").get(getheaderDetails);

router.route("/admin/headers").get(getAdminHeaders);

router.route("/admin/header").post(createHeader);

router.route("/admin/header/:id").put(updateHeader).delete(deleteHeader);

module.exports = router;
