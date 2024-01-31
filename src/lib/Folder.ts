import { Component } from './components/Component';

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
