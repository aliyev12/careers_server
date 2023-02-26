import { NextFunction, Request, Response } from "express";
import { validationResult } from "express-validator";
import { EStatus } from "../interfaces";
import * as careers from "../services/careers.service";

export async function get(req: Request, res: Response, next: NextFunction) {
  try {
    // res.status(200).json({ message: "Carrers get page OK" });
    res.json(await careers.getMultiple());
  } catch (err: any) {
    console.error(`Error while getting job applications`, err.message);
    next(err);
  }
}

export async function getOne(req: Request, res: Response, next: NextFunction) {
  try {
    res.json(await careers.getOne(req.params.id));
  } catch (err: any) {
    console.error(`Error while getting job application`, err.message);
    next(err);
  }
}

interface ICustomError extends Error {
  statusCode: number;
}

export async function create(req: Request, res: Response, next: NextFunction) {
  try {
    const errors = validationResult(req);
    console.log("$$$$$$$ errors = ", errors);
    if (!errors.isEmpty()) {
      res.json({
        status: EStatus.validation,
        validationErrors: errors.array(),
      });

      // // return res.status(422).json({ errors: errors.array() });
      // const newError: ICustomError = {...new Error(), statusCode: 422};
      // newError.
      // // {
      // //   statusCode: 422,
      // //   error: { type: "validation", body: errors.array() },
      // // };
      // return next(newError);
    } else {
      res.json(await careers.create(req.body));
    }
  } catch (err: any) {
    console.error(`Error while creating job application`, err.message);
    next(err);
  }
}

export async function update(req: Request, res: Response, next: NextFunction) {
  try {
    res.json(await careers.update(req.params.id, req.body));
  } catch (err: any) {
    console.error(`Error while updating job application`, err.message);
    next(err);
  }
}

export async function remove(req: Request, res: Response, next: NextFunction) {
  try {
    res.json(await careers.remove(req.params.id));
  } catch (err: any) {
    console.error(`Error while deleting job application`, err.message);
    next(err);
  }
}
