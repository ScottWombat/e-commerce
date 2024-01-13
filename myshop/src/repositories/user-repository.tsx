import { BaseRepository } from './base-repository';

export interface IUser {
  username: string;
  password: string;
}

class UserRepository extends BaseRepository<IUser> {
    collection = 'users';

    getMany() {
      return super.getMany();
    }
  
    get(id: string) {
      return super.get(id);
    }
  
    post(data: IUser) {
      return super.post(data);
    }
  
    update(id: string, data: IUser) {
      return super.update(id, data);
    }
  
    delete(id: string) {
      return super.delete(id);
    }
}

export default UserRepository;