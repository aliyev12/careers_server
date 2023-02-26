import express from "express";
import * as careersController from "../controllers/careers.controller";

const careersRouter = express.Router();

/* GET job applications. */
careersRouter.get("/", careersController.get);

/* GET job application. */
careersRouter.get("/:id", careersController.getOne);

/* POST job application */
careersRouter.post("/", careersController.create);

/* PUT job application */
careersRouter.put("/:id", careersController.update);

/* DELETE job application */
careersRouter.delete("/:id", careersController.remove);

export { careersRouter };
