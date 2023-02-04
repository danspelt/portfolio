/*
 * GET index page.
 */
import express = require('express');

const router = express.Router();

router.get("/", async(req, res) => {  
  res.render("index", { title: "Home" });
})

export default router;