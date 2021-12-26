import { Response, Request } from "express";

import { CreateUserUseCase } from "./CreateUserUseCase";

class CreateUserController {
  constructor(private createUserUseCase: CreateUserUseCase) {
    // Default
  }

  handle(request: Request, response: Response): Response {
    const { email, name } = request.body;

    try {
      const user = this.createUserUseCase.execute({ name, email });

      return response.status(201).json(user);
    } catch (err) {
      const error = {};
      if (err instanceof Error) {
        Object.assign(error, { error: err.message });
      }
      return response.status(400).json(error);
    }
  }
}

export { CreateUserController };
