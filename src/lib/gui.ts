import { CSS } from './CSS';

console.log('a change');
interface Options {
    title?: string;
    width?: number;
    height?: number;
    // Show the gui `on page load
    show?: boolean;
    key?: string;
}

export class GUI {
    options: Options;

    visible: boolean = false;

    folders: Folder[] = [];

    locked: boolean = false;

    sourceID: string = 'GGUI-Container';
    // source: HTMLDivElement = document.createElement('div');

    constructor(options?: Options) {
        const defaultOptions: Options = {
            title: 'GG GUI',
            width: 700,
            height: 400,
            show: true,
            key: 'Escape',
        };

        this.options = { ...defaultOptions, ...options };

        if (this.options.show) {
            this.display(true);
        }

        document.addEventListener('keydown', e => {
            if (e.key === this.options.key) {
                this.display(!this.visible);
            }
        });
    }

    addFolder(folder: Folder) {
        this.folders.push(folder);
    }

    display(show: boolean) {
        // toggle display on gui element
    }

    init() {
        if (this.locked) throw new Error('Gui has already been initialized');
        this.locked = true;

        const styles = document.createElement('style');
        styles.innerHTML = CSS;
        document.head.appendChild(styles);

        const source = document.createElement('div');
        source.id = this.sourceID;
        source.style.width = `${this.options.width}px`;
        source.style.height = `${this.options.height}px`;

        // Render the gui to html
        for (let i = 0; i < this.folders.length; i++) {
            const folder = this.folders[i];
            folder._renderTo(source);
        }
        document.body.appendChild(source);
    }
}

interface FolderOptions {
    name: string;
}

export class Folder {
    name: string;
    components: Component[] = [];

    constructor(folder: FolderOptions) {
        this.name = folder.name;
    }

    addComponent(component: Component) {
        switch (true) {
            case component instanceof Button:
                const button = component as Button;

                break;
            case component instanceof CheckBox:
                const checkbox = component as CheckBox;

                break;
            default:
                break;
        }
        this.components.push(component);
    }

    _renderTo(parent: HTMLElement) {
        const folder = document.createElement('div');
        folder.classList.add('GGUI-Folder');

        for (let i = 0; i < this.components.length; i++) {
            const component = this.components[i];
            component._renderTo(folder);
        }

        parent.appendChild(folder);
    }
}

interface ComponentOptions {
    title: string;
}

abstract class Component {
    title: string;
    // options: ComponentOptions;

    constructor(options: ComponentOptions) {
        this.title = options.title;
        // this.options = options;
    }

    abstract _renderTo(parent: HTMLElement): void;
}

type ButtonOptions = ComponentOptions & {
    onClick: () => void;
    label?: string;
};

export class Button extends Component {
    options: ButtonOptions;
    constructor(options: ButtonOptions) {
        super(options);
        this.options = options;
    }

    _renderTo(parent: HTMLElement) {
        const container = document.createElement('div');
        container.classList.add('GGUI-Row');

        const title = document.createElement('div');
        title.innerText = this.title;
        title.style.marginRight = 'auto';

        const button = document.createElement('button');
        button.innerText = this.options.label || '';
        button.classList.add('GGUI-Button');
        button.addEventListener('change', e => {
            this.options.onClick();
        });

        container.appendChild(title);
        container.appendChild(button);

        parent.appendChild(container);
    }
}

type CheckBoxOptions = ComponentOptions & {
    onChange: (active: boolean) => void;
};

export class CheckBox extends Component {
    options: CheckBoxOptions;
    constructor(options: CheckBoxOptions) {
        super(options);
        // TODO: find better way for this
        this.options = options;
    }

    _renderTo(parent: HTMLElement) {
        const container = document.createElement('div');
        container.classList.add('GGUI-Row');

        const title = document.createElement('div');
        title.innerText = this.title;
        title.style.marginRight = 'auto';

        const checkbox = document.createElement('input');
        checkbox.classList.add('GGUI-CheckBox');
        checkbox.type = 'checkbox';
        checkbox.addEventListener('change', e => {
            this.options.onChange(checkbox.checked);
        });

        container.appendChild(title);
        container.appendChild(checkbox);

        parent.appendChild(container);
    }
}