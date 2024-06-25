// src/modules/users/users.controller.ts
import { Request, Response } from 'express';
import { userValidationSchema } from './users.validation';
import usersModel from './users.model';

const createUser = async (req: Request, res: Response) => {
  try {
    // Validate the request body against the schema
    const result = userValidationSchema.parse(req.body);

    if (!result) {
      // If validation fails, return a 400 status with the validation errors
      return res.status(400).json({
        success:false,
        message:"validation error",
      });
    }

    // Create the user in the database (replace with actual database interaction)
    const newUser = await usersModel.create(result);

    // Return the created user with a 201 status
    res.status(201).json(newUser);
  } catch (error) {
    // Handle unexpected errors
    res.status(500).json({ message: 'Internal server error', error });
  }
};

export const userController = {
  createUser,
};
