import { Request, Response } from "express";

import { ShowUserProfileUseCase } from "./ShowUserProfileUseCase";

class ShowUserProfileController {
  constructor(private showUserProfileUseCase: ShowUserProfileUseCase) {
    // Default
  }

  handle(request: Request, response: Response): Response {
    const { user_id } = request.params;

    try {
      const user = this.showUserProfileUseCase.execute({ user_id });

      return response.json(user);
    } catch (err) {
      const error = {};
      if (err instanceof Error) {
        Object.assign(error, { error: err.message });
      }
      return response.status(404).json(error);
    }
  }
}

export { ShowUserProfileController };
