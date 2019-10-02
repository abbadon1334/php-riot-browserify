import {mount, register, RiotComponentShell, unmount, unregister} from 'riot'

export class Tag {

    unregisterTag(tag: string) {
        unregister(tag);
    }

    registerTag(tag: string, shell: RiotComponentShell) {
        register(tag, shell);
    }

    mountTag(tag: string, data: object) {
        mount(tag, () => (data));
    }

    unmountTag(tag: string, keepRootElement: boolean) {
        unmount(tag, keepRootElement);
    }
}
