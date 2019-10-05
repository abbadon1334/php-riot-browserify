import {mount, register, RiotComponentShell, unmount, unregister} from 'riot'

export class Tag {

    // keep trace of already registered tag
    private registerTags:Map<string, boolean> = new Map<string, boolean>();

    public initTag(tag:string, shell: RiotComponentShell) {
        this.registerTag(tag, shell);
    }

    public isRegistered(tag:string) {
        return this.registerTags[tag] !== true;
    }

    // i think in my case this is not needed
    public unregisterTag(tag: string) {
        unregister(tag);
    }

    registerTag(tag: string, shell: RiotComponentShell) {

        if(this.isRegistered(tag)) return;

        this.registerTag[tag] = true;
        register(tag, shell);
    }

    mountTag(tag: string, data: object) {
        console.log('mount tag: ' + tag);
        mount(tag, () => (data));
    }

    // @todo check if is much faster for specific tag than vanilla js
    unmountTag(tag: string, keepRootElement: boolean) {
        unmount(tag, keepRootElement);
    }
}
