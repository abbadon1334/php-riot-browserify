
import {install, register} from "riot";
import {debounce} from "debounce"
import Nemesi from "../index";

const timer = require('../components/timer.riot').default;

export class Core {

    init() {

        install(function(component) {
            return component;
        });

        register('timer', timer);
    }

    debounce(f, millisec: number) {
        return debounce(f, millisec);
    }
}
