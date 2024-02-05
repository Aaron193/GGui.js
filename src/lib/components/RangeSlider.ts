import { Component, ComponentOptions } from './Component';

type RangeSliderOptions = ComponentOptions & {
    min: number;
    max: number;
    value: number;
    step: number;
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
        rangeSlider.min = this.options.min + '';
        rangeSlider.max = this.options.max + '';
        rangeSlider.value = this.options.value + '';
        rangeSlider.step = this.options.step + '';
        rangeSlider.addEventListener('input', e => {
            const value = (e.target as HTMLInputElement).valueAsNumber;

            // grab the text-box and update it
            const textBox = (e.target as HTMLInputElement).nextSibling as HTMLInputElement;
            textBox.value = `${value}`;

            this.options.onChange(value);
        });

        const textValue = document.createElement('input');
        textValue.classList.add('GGUI-RangeSlider-TextValue');
        textValue.type = 'number';
        textValue.max = `${this.options.max}`;
        textValue.min = `${this.options.min}`;
        textValue.value = `${this.options.value}`;
        textValue.step = `${this.options.step}`;
        textValue.addEventListener('input', e => {
            const value = (e.target as HTMLInputElement).valueAsNumber;
            // grab the range element and update it
            const slider = (e.target as HTMLInputElement).previousSibling as HTMLInputElement;
            slider.value = `${value}`;

            this.options.onChange(value);
        });

        container.appendChild(title);
        container.appendChild(rangeSlider);
        container.appendChild(textValue);

        parent.appendChild(container);
    }
}
