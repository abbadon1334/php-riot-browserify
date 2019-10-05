import {install, register} from "riot"

// @TODO fetch dir components and get all elements
const timer = require('../components/timer.riot').default;

export class Core {

    public init() {

        // install is FIFO
        install(function (component) {
            console.log('install1:' + component.name);
            return component;
        });

        install(function (component) {
            console.log('install2:' + component.name);
            return component;
        });

        install(function (component) {
            console.log('install3:' + component.name);
            return component;
        });
        install(function (component) {
            console.log('install4:' + component.name);
            return component;
        });

        console.log('before register');
        register('timer', timer);
        console.log('after register');
    }
}
