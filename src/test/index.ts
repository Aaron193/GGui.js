import GGUI from '../lib/index';

const GUI = GGUI.GUI;
const Folder = GGUI.Folder;
const Button = GGUI.Button;
const CheckBox = GGUI.CheckBox;

const gui = new GUI({
    title: 'My GUI',
});

const folderCount = 10;
const buttonPerFolder = 10;
const checkboxPerFolder = 10;
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

    gui.addFolder(folder);
}

gui.init();
