import wretch from 'wretch'

export class Ajax {

    public static defaultFuncSuccess(response) {
        console.log(response);
    }

    public static defaultFuncError(error) {
        console.error(error);
    }

    get(endpoint: string, data: object, onSuccess, onError) {

        return new Promise(function(resolve,reject) {

            Ajax._get(endpoint, data)
                .res(response => resolve(response))
                .catch(error => reject(error))
        });
    }

    static _get(endpoint, data) {
        return wretch(endpoint).get(data === undefined ? {} : data);
    }

    static _post(endpoint, data) {
        return wretch(endpoint).post(data === undefined ? {} : data);
    }

    getJSON(endpoint: string, data: object) {

        return new Promise(function(resolve,reject) {

            Ajax._get(endpoint, data)
                .json(response => resolve(response))
                .catch(error => reject(error))
        });
    }

    post(endpoint: string, data: object, onSuccess, onError) {

        return new Promise(function(resolve,reject) {

            Ajax._post(endpoint, data)
                .res(response => resolve(response))
                .catch(error => reject(error))
        });
    }

    postJSON(endpoint: string, data: object, onSuccess, onError) {

        return new Promise(function(resolve,reject) {

            Ajax._post(endpoint, data)
                .json(response => resolve(response))
                .catch(error => reject(error))
        });
    }
}
