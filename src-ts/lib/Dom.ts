export class Dom {

    getByID(id: string) {
        return document.getElementById(id);
    }

    getByTAG(tag: string) {
        return document.querySelector(tag);
    }

    appendTo(id: string, tag, data: object) {

        let el = document.createElement(tag);
        this.getByID(id).appendChild(el);
    }

    replace(id: string, tag, data: object) {

        let el = document.createElement(tag);
        this.getByID(id).replaceWith(el);
    }
}


