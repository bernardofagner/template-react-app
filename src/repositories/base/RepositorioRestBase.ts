import { AxiosError } from 'axios';
import { AxiosProvider } from '../../common/restClient/axios/AxiosProvider';

export interface CustomAxiosResponse {
    Data: any | null,
    Error?: ErrorDetail,
    Status: number,
}

interface ErrorDetail {
    Origin: string,
    Message: string,
    Notifications: Array<string> | null,
    IsClientSideFailure: boolean,
    IsServerSideFailure: boolean,
    IsConnectionFailure: boolean
}

export abstract class RestBaseRepository {

    private Client: any;

    constructor() {
        this.Client = AxiosProvider.CreateAxiosInstance();
    }

    /**
     * @param endpoint Represents the origin of source
     * @param body Represents the request body
     * @param headers Represents the request header
     * @returns Returns an CustomAxiosResponse object containing the request's details
     */
    protected async post<T>(endpoint: string, body: T, headers: any = null): Promise<CustomAxiosResponse> {
        try {
            const response = await this.Client.post(endpoint, body, headers);

            const axiosResponse: CustomAxiosResponse = {
                Data: response.data.data,
                Status: response.status,
            };

            return axiosResponse;
        }
        catch(erro) {
            const axiosError = erro as AxiosError;
            const axiosResponse = this.handleAxiosError(axiosError);

            return axiosResponse;
        }
    }
    
    /**
     * @param endpoint Represents the origin of source
     * @param headers Represents the request header
     * @returns Returns an CustomAxiosResponse object containing the request's details
     */
    protected async get(endpoint: string, headers: any = null): Promise<CustomAxiosResponse> {

        try {
            const response = await this.Client.get(endpoint, headers);

            const axiosResponse: CustomAxiosResponse = {
                Data: response.data.data,
                Status: response.status,
            };

            return axiosResponse;
        }
        catch (error) {
            const axiosError = error as AxiosError;
            const axiosResponse = this.handleAxiosError(axiosError);

            return axiosResponse;
        }
    }

    private handleAxiosError(axiosError: AxiosError): CustomAxiosResponse {

        if (axiosError && axiosError.response) {
            const { status, data } = axiosError.response;

            const axiosResponse: CustomAxiosResponse = {
                Data: null,
                Status: status,
                Error: {
                    IsClientSideFailure: status >= 400 && status <= 499,
                    IsServerSideFailure: status >= 500,
                    Origin: data.origem,
                    Message: data.mensagem,
                    Notifications: data.notificacoes,
                    IsConnectionFailure: false
                },
            };

            return axiosResponse;
        }
        else {
            const axiosResponse: CustomAxiosResponse = {
                Data: null,
                Status: 0,
                Error: {
                    IsClientSideFailure: false,
                    IsServerSideFailure: false,
                    Origin: '',
                    Message: '',
                    Notifications: null,
                    IsConnectionFailure: true
                },
            };
            
            return axiosResponse;
        }
    }
}