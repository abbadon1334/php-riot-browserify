import {Ajax} from "./lib/Ajax"
import {Dom} from "./lib/Dom"
import {Utils} from "./lib/Utils"
import {Tag} from "./lib/Tag"
import {Core} from "./lib/Core"

var Nemesi = {
    'Core': new Core(),
    'Ajax': new Ajax(),
    'Dom': new Dom(),
    'Utils': new Utils(),
    'Tag': new Tag()
};

window['Nemesi'] = Nemesi;
export default Nemesi;
