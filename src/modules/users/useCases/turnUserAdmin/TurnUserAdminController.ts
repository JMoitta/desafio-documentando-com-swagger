import { Request, Response } from "express";

import { TurnUserAdminUseCase } from "./TurnUserAdminUseCase";

class TurnUserAdminController {
  constructor(private turnUserAdminUseCase: TurnUserAdminUseCase) {
    // Default
  }

  handle(request: Request, response: Response): Response {
    const { user_id } = request.params;

    try {
      const user = this.turnUserAdminUseCase.execute({ user_id });
      return response.status(201).json(user);
    } catch (err) {
      const error = {};
      if (err instanceof Error) {
        Object.assign(error, { error: err.message });
      }
      return response.status(404).json(error);
    }
  }
}

export { TurnUserAdminController };
