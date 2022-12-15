import { Router } from "express";
import { renderTasks } from "../controllers/tasks.controller";

const router = Router();

router.get("/", renderTasks)

router.get("/about", (req, res) => {
  res.render("about.hbs");
})

export default router;
