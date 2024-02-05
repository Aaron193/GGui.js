import { Component, ComponentOptions } from './Component';

type ColorPickerOptions = ComponentOptions & {
    onChange: (color: string) => void;
};

export class ColorPicker extends Component {
    options: ColorPickerOptions;
    constructor(options: ColorPickerOptions) {
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

        const colorPicker = document.createElement('input');
        colorPicker.classList.add('GGUI-ColorPicker');
        colorPicker.type = 'color';
        colorPicker.addEventListener('change', e => {
            this.options.onChange((e.target as HTMLInputElement).value);
        });

        container.appendChild(title);
        container.appendChild(colorPicker);

        parent.appendChild(container);
    }
}
