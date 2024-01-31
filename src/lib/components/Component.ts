export interface ComponentOptions {
    title: string;
}

export abstract class Component {
    title: string;
    // options: ComponentOptions;

    constructor(options: ComponentOptions) {
        this.title = options.title;
        // this.options = options;
    }

    abstract _renderTo(parent: HTMLElement): void;
}
