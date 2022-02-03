const express = require("express");
const {
  getAllAbouts,
  getAboutDetails,
  getAdminAbouts,
  createAbout,
  updateAbout,
  deleteAbout,
} = require("../controllers/aboutCtrl");

const router = express.Router();

router.route("/abouts").get(getAllAbouts);
router.route("/about/:id").get(getAboutDetails);

router.route("/admin/abouts").get(getAdminAbouts);

router.route("/admin/about").post(createAbout);

router.route("/admin/about/:id").put(updateAbout).delete(deleteAbout);

module.exports = router;
