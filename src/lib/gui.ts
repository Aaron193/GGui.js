import { CSS } from './CSS';
import { Folder } from './Folder';
import { Component } from './components/Component';

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
