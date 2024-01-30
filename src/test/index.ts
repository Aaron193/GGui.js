import GGUI from '../lib/index';

const GUI = GGUI.GUI;
const Folder = GGUI.Folder;
const Button = GGUI.Button;
const CheckBox = GGUI.CheckBox;

const gui = new GUI({
    title: 'My GUI',
});

const folder = new Folder({
    name: 'folder',
});

folder.addComponent(
    new Button({
        title: 'button-name',
        label: 'click here',
        onClick: () => {
            console.log('i clicked it');
        },
    })
);

folder.addComponent(
    new CheckBox({
        title: 'checkbox-name',
        onChange: active => {
            console.log('checkbox state', active);
        },
    })
);

gui.addFolder(folder);

gui.init();
