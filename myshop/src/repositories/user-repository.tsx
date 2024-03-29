import { BaseRepository } from './base-repository';

export interface IUser {
  username: string;
  token: string;
  token_type: string;
}

export interface IError{
  message: string;
}

class UserRepository extends BaseRepository<IUser> {
    collection = 'users';

    getMany() {
      return super.getMany();
    }
  
    get(id: string) {
      return super.get(id);
    }
  
    post(formData: FormData) {
      return super.post(formData);
    }
  
    update(id: string, data: IUser) {
      return super.update(id, data);
    }
  
    delete(id: string) {
      return super.delete(id);
    }
}

export default UserRepository;