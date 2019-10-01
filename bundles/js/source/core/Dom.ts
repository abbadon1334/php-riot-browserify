
import {compile} from '@riotjs/compiler'
import {mount} from 'riot'

export class Dom {

    getByID(id: string) {
        return document.getElementById(id);
    }

    appendTo(id: string, tag, data: object) {

        let el = document.createElement(tag);
        this.getByID(id).appendChild(el);

        mount(tag, () => (data));
    }

    replace(id: string, tag, data: object) {

        let el = document.createElement(tag);
        this.getByID(id).replaceWith(el);

        mount(tag, () => (data));
    }
}
