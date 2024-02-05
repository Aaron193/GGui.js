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

        const ColorWheel = document.createElement('input');
        ColorWheel.classList.add('GGUI-ColorWheel');
        ColorWheel.type = 'color';
        ColorWheel.addEventListener('change', e => {
            this.options.onChange((e.target as HTMLInputElement).value);
        });

        container.appendChild(title);
        container.appendChild(ColorWheel);

        parent.appendChild(container);
    }
}
