import { Component, ComponentOptions } from './Component';

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
