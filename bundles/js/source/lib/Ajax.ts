import wretch from 'wretch'

export class Ajax {

    public static defaultFuncSuccess(response) {
        console.log(response);
    }

    public static defaultFuncError(error) {
        console.error(error);
    }

    get(endpoint: string, data: object, onSuccess, onError) {
        this._get(endpoint, data)
            .res((response) => onSuccess === undefined ? Ajax.defaultFuncSuccess : onSuccess)
            .catch((error) => onError === undefined ? Ajax.defaultFuncError : onError)
    }

    _get(endpoint, data) {
        return wretch(endpoint).get(data === undefined ? {} : data);
    }

    _post(endpoint, data) {
        return wretch(endpoint).post(data === undefined ? {} : data);
    }

    getJSON(endpoint: string, data: object, onSuccess, onError) {
        this._get(endpoint, data)
            .json(response => onSuccess === undefined ? Ajax.defaultFuncSuccess : onSuccess)
            .catch(error => onError === undefined ? Ajax.defaultFuncError : onError)
    }

    post(endpoint: string, data: object, onSuccess, onError) {
        this._post(endpoint, data)
            .json(response => onSuccess === undefined ? Ajax.defaultFuncSuccess : onSuccess)
            .catch(error => onError === undefined ? Ajax.defaultFuncError : onError)
    }

    postJSON(endpoint: string, data: object, onSuccess, onError) {
        this._post(endpoint, data)
            .res(response => onSuccess === undefined ? Ajax.defaultFuncSuccess : onSuccess)
            .catch(error => onError === undefined ? Ajax.defaultFuncError : onError)
    }
}
