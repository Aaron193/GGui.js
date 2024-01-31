import { Component, ComponentOptions } from './Component';

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
