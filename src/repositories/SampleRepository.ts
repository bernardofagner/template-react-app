import httpStatus from 'http-status';
import { Config } from '../config/Config';
import { UserModelExtention } from '../models/users/UserModel';
import { RestBaseRepository } from './base/RepositorioRestBase';

class SampleRepository extends RestBaseRepository {

    public async PostSampleInformation<T>(body: T): Promise<any> {

        const url = Config.Urls.SampleApi.userEndpoints.createNewUser;
        const response = await super.post(url, body);

        switch (response.Status) {
            case httpStatus.OK: {
                
                return response;
            }
            default: {
                console.log(`Erroe: ${response.Status} | ${response.Error?.Message}`);
                return response.Data;
            }
        }
    }

    public async GetSampleInformation(): Promise<any> {

        const url = Config.Urls.SampleApi.userEndpoints.listUsers;
        const response = await super.get(url);

        switch (response.Status) {
            case httpStatus.OK: {
                const userInformation = UserModelExtention.MakeUser(response.Data);
                return userInformation;
            }
            default: {
                console.log(`Erroe: ${response.Status} | ${response.Error?.Message}`);
                return response.Data;
            }
        }
    }
}

const instance = new SampleRepository();
export { instance as SampleRepository };