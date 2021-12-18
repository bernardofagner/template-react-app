export interface UserModel {
    Name: string;
    Email: string;
    BirthDate: Date;
};

export class UserModelExtention {

    public static MakeUser(obj: any): UserModel {
        const user = {} as UserModel;
        Object.assign(user, obj);

        user.BirthDate = (typeof obj.BirthDate === typeof Date) ? obj.BirthDate : new Date(obj.BirthDate);

        return user;
    };
}