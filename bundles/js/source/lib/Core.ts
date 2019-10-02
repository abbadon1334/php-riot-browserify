
import {register} from "riot";
import {debounce} from "debounce"

const timer = require('../components/timer.riot').default;

export class Core {

    init() {
        register('timer', timer);
    }

    debounce(f, millisec: number) {
        debounce(f, millisec);
    }
}
