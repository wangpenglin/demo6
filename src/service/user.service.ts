import http from '../common/http';
import { UserModel } from '../model/user.model';

class UserService {
    public find(params: any): Promise<any> {
       return http.get('/user/find',params);
    }

    public insert(item: UserModel) {
        return http.post('/user/insert',item);
    }

    public update(item: UserModel) {
        return http.post('/user/update', item);
    }

    public delete(item: UserModel) {
        return http.post('/user/delete',item);
    }
} 

export default new UserService; 