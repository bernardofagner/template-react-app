class Config {

    public readonly Urls = {
        SampleApi: {
            BaseUrl: 'http://localhost:5000', //TODO: change to get data from env file
             userEndpoints: {
                createNewUser: 'users',
                listUsers: 'users',
                getUser: 'users/:userId'
            }
        }
    }
}

const instance = new Config();
export { instance as Config };