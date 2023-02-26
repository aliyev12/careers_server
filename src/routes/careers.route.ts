import express from "express";
import * as careersController from "../controllers/careers.controller";
import * as careersMiddleware from "../middlewares/careers.middleware";

const careersRouter = express.Router();

/* GET job applications. */
careersRouter.get("/", careersController.get);

/* GET job application. */
careersRouter.get("/:id", careersController.getOne);

/* POST job application */
careersRouter.post(
  "/",
  careersMiddleware.validateNewJobApplication,
  careersController.create
);

/* PUT job application */
careersRouter.put("/:id", careersController.update);

/* DELETE job application */
careersRouter.delete("/:id", careersController.remove);

export { careersRouter };
