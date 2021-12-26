import { User } from "../../model/User";
import { IUsersRepository } from "../../repositories/IUsersRepository";

interface IRequest {
  user_id: string;
}

class ListAllUsersUseCase {
  constructor(private usersRepository: IUsersRepository) {
    // Default
  }

  execute({ user_id }: IRequest): User[] {
    // Complete aqui
    const userAlreadyExists = this.usersRepository.findById(user_id);

    if (!userAlreadyExists) {
      throw new Error("User not exists!");
    } else if (!userAlreadyExists.admin) {
      throw new Error("User not is admin!");
    }

    return this.usersRepository.list();
  }
}

export { ListAllUsersUseCase };
