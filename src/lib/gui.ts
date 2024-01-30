import { CSS } from './CSS';

interface Options {
    title?: string;
    width?: number;
    height?: number;
    // Show the gui on page load initially
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
            title: 'GGUI',
            width: 700,
            height: 450,
            show: true,
            key: 'Escape',
        };

        this.options = { ...defaultOptions, ...options };
    }

    addFolder(folder: Folder) {
        this.folders.push(folder);
    }

    display(show: boolean) {
        this.visible = show;

        const source = document.getElementById(this.sourceID) as HTMLDivElement;
        source.style.display = show ? 'flex' : 'none';
    }

    private _createTitle() {
        const title = document.createElement('div');
        title.id = 'GGUI-Title';
        title.innerText = this.options.title!;
        return title;
    }
    private _createFooter() {
        const footer = document.createElement('div');
        footer.id = 'GGUI-footer';
        footer.innerText = 'GGui.js';
        return footer;
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

        const folderContainer = document.createElement('div');
        folderContainer.id = 'GGUI-Folder-Container';

        // Render the gui to html
        for (let i = 0; i < this.folders.length; i++) {
            const folder = this.folders[i];
            folder._renderTo(folderContainer);
        }

        source.appendChild(this._createTitle());
        source.appendChild(folderContainer);
        source.appendChild(this._createFooter());
        document.body.appendChild(source);

        if (this.options.show) {
            this.display(true);
        }

        document.addEventListener('keydown', e => {
            if (e.key === this.options.key) {
                this.display(!this.visible);
            }
        });
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
        this.components.push(component);
    }

    _renderTo(parent: HTMLElement) {
        const folder = document.createElement('div');
        folder.classList.add('GGUI-Folder');

        const folderTitle = document.createElement('div');
        folderTitle.innerText = this.name;
        folderTitle.classList.add('GGUI-Folder-Title');
        folder.appendChild(folderTitle);

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
        button.addEventListener('click', () => {
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
