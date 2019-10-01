import wretch from 'wretch';
export class Ajax {

    private static _get(endpoint: string, data: object) {
        return wretch(endpoint).get(data);
    }

    private static _post(endpoint: string, data: object) {
        return wretch(endpoint).get(data);
    }

    public get(endpoint: string, data: object, onSuccess, onFailure) {
        return Ajax._get(endpoint, data)
            .res(response => onSuccess)
            .catch(error => onFailure)
    }

    getJSON(endpoint: string, data: object, onSuccess, onFailure) {
        return Ajax._get(endpoint, data)
            .json(response => onSuccess)
            .catch(error => onFailure)
    }

    post(endpoint: string, data: object, onSuccess, onFailure) {
        return Ajax._post(endpoint, data)
            .json(response => onSuccess)
            .catch(error => onFailure)
    }

    postJSON(endpoint: string, data: object, onSuccess, onFailure) {
        return Ajax._post(endpoint, data)
            .res(response => onSuccess)
            .catch(error => onFailure)
    }
}
