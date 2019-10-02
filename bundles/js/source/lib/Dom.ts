export class Dom {

    getByID(id: string) {
        return document.getElementById(id);
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


