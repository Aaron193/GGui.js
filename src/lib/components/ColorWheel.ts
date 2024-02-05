import { Component, ComponentOptions } from './Component';

type ColorWheelOptions = ComponentOptions & {
    onChange: (color: string) => void;
};

export class ColorWheel extends Component {
    options: ColorWheelOptions;
    constructor(options: ColorWheelOptions) {
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

        const colorWheel = document.createElement('input');
        colorWheel.classList.add('GGUI-ColorWheel');
        colorWheel.type = 'color';
        colorWheel.addEventListener('change', e => {
            this.options.onChange((e.target as HTMLInputElement).value);
        });

        container.appendChild(title);
        container.appendChild(colorWheel);

        parent.appendChild(container);
    }
}
