import { Component, ComponentOptions } from './Component';

type RangeSliderOptions = ComponentOptions & {
    min: number;
    max: number;
    value: number;
    onChange: (value: number) => void;
};
export class RangeSlider extends Component {
    options: RangeSliderOptions;
    constructor(options: RangeSliderOptions) {
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

        const rangeSlider = document.createElement('input');
        rangeSlider.classList.add('GGUI-RangeSlider');
        rangeSlider.type = 'range';
        rangeSlider.min = `${this.options.min}`;
        rangeSlider.max = `${this.options.max}`;
        rangeSlider.value = `${this.options.value}`;
        rangeSlider.addEventListener('input', e => {
            const value = (e.target as HTMLInputElement).valueAsNumber;
            this.options.onChange(value);
        });

        container.appendChild(title);
        container.appendChild(rangeSlider);

        parent.appendChild(container);
    }
}
