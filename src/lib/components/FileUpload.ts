import { Component, ComponentOptions } from './Component';

type FileUploadOptions = ComponentOptions & {
    onUpload: (file: FileList | null) => void;
    multiple: boolean;
};

export class FileUpload extends Component {
    options: FileUploadOptions;
    constructor(options: FileUploadOptions) {
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

        const fileUpload = document.createElement('input');
        fileUpload.classList.add('GGUI-FileUpload');
        fileUpload.type = 'file';
        fileUpload.multiple = this.options.multiple;

        fileUpload.addEventListener('change', e => {
            const element = e.target as HTMLInputElement;
            if (element.files) {
                this.options.onUpload(element.files);
            }
        });

        container.appendChild(title);
        container.appendChild(fileUpload);

        parent.appendChild(container);
    }
}
