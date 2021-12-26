import { Request, Response } from "express";

import { ListAllUsersUseCase } from "./ListAllUsersUseCase";

class ListAllUsersController {
  constructor(private listAllUsersUseCase: ListAllUsersUseCase) {
    // Default
  }

  handle(request: Request, response: Response): Response {
    const user_id = request.header("user_id");

    try {
      const users = this.listAllUsersUseCase.execute({ user_id });

      return response.json(users);
    } catch (err) {
      const error = {};
      if (err instanceof Error) {
        Object.assign(error, { error: err.message });
      }
      return response.status(400).json(error);
    }
  }
}

export { ListAllUsersController };
