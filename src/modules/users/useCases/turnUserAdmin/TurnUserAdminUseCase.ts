import { User } from "../../model/User";
import { IUsersRepository } from "../../repositories/IUsersRepository";

interface IRequest {
  user_id: string;
}

class TurnUserAdminUseCase {
  constructor(private usersRepository: IUsersRepository) {
    // Default
  }

  execute({ user_id }: IRequest): User {
    const userAlreadyExists = this.usersRepository.findById(user_id);

    if (!userAlreadyExists) {
      throw new Error("Not exists user!");
    }

    const userTurn = this.usersRepository.turnAdmin(userAlreadyExists);

    return userTurn;
  }
}

export { TurnUserAdminUseCase };
