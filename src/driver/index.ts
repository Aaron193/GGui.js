import { ColorWheel } from '../lib/components/ColorWheel';
import { FileUpload } from '../lib/components/FileUpload';
import GGUI from '../lib/index';

const GUI = GGUI.GUI;
const Folder = GGUI.Folder;
const Button = GGUI.Button;
const CheckBox = GGUI.CheckBox;
const RangeSlider = GGUI.RangeSlider;

const gui = new GUI({
    title: 'My Gui Title',
});

const folderCount = 10;
const buttonPerFolder = 2;
const checkboxPerFolder = 2;
const slidersPerFolder = 2;
const colorsPerFolder = 2;
const filesPerFolder = 2;
for (let i = 0; i < folderCount; i++) {
    const folder = new Folder({
        name: `folder-${i}`,
    });

    for (let j = 0; j < buttonPerFolder; j++) {
        folder.addComponent(
            new Button({
                title: `button-${i}-${j}`,
                label: `click here ${i}-${j}`,
                onClick: () => {
                    console.log(`Button clicked ${i}:${j}`);
                },
            })
        );
    }

    for (let j = 0; j < checkboxPerFolder; j++) {
        folder.addComponent(
            new CheckBox({
                title: `checkbox-${i}-${j}`,
                onChange: active => {
                    console.log(`Checkbox toggled ${i}:${j}`, active);
                },
            })
        );
    }

    for (let j = 0; j < slidersPerFolder; j++) {
        folder.addComponent(
            new RangeSlider({
                title: `slider-${i}-${j}`,
                min: 0,
                max: 100,
                value: 50,
                step: 1,
                onChange: value => {
                    console.log(`Slider changed ${i}:${j}`, value);
                },
            })
        );
    }
    for (let j = 0; j < colorsPerFolder; j++) {
        folder.addComponent(
            new ColorWheel({
                title: `slider-${i}-${j}`,
                onChange: value => {
                    console.log(`color changed ${i}:${j}`, value);
                },
            })
        );
    }

    for (let j = 0; j < filesPerFolder; j++) {
        folder.addComponent(
            new FileUpload({
                title: `slider-${i}-${j}`,
                multiple: true,
                onUpload: file => {
                    console.log(`file uploaded ${i}:${j}`, file);
                },
            })
        );
    }

    gui.addFolder(folder);
}

gui.init();
