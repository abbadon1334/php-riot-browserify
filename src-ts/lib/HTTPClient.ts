import wretch from 'wretch'

export class HTTPClient {

    private static _get(endpoint, data) {
        return wretch(endpoint).get(data === undefined ? {} : data);
    }

    private static _post(endpoint, data) {
        return wretch(endpoint).post(data === undefined ? {} : data);
    }

    async get(endpoint: string, data: object) {

        return await new Promise(function (resolve, reject) {
            HTTPClient._get(endpoint, data)
                .res(response => resolve(response))
                .catch(error => reject(error))
        });
    }

    async getJSON(endpoint: string, data: object) {

        return new Promise(function (resolve, reject) {
            HTTPClient._get(endpoint, data)
                .json(response => resolve(response))
                .catch(error => reject(error))
        });
    }

    async post(endpoint: string, data: object) {

        return new Promise((resolve, reject) => {

            HTTPClient._post(endpoint, data)
                .res(response => resolve(response))
                .catch(error => reject(error))
        });
    }

    async postJSON(endpoint: string, data: object, onSuccess, onError) {

        return new Promise((resolve, reject) => {

            HTTPClient._post(endpoint, data)
                .json(response => resolve(response))
                .catch(error => reject(error))
        });
    }
}
