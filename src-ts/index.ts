import {HTTPClient} from "./lib/HTTPClient"
import {Dom} from "./lib/Dom"
import {Utils} from "./lib/Utils"
import {Tag} from "./lib/Tag"
import {Core} from "./lib/Core"

var Nemesi = {
    'Core': new Core(),
    'HTTPClient': new HTTPClient(),
    'Dom': new Dom(),
    'Utils': new Utils(),
    'Tag': new Tag()
};

window['Nemesi'] = Nemesi;
export default Nemesi;
