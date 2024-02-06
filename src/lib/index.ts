import { GUI } from './Gui';
import { Folder } from './Folder';
import { Button } from './components/Button';
import { CheckBox } from './components/CheckBox';
import { RangeSlider } from './components/RangeSlider';
import { ColorWheel } from './components/ColorWheel';
import { FileUpload } from './components/FileUpload';

if (typeof window !== 'undefined') {
    (window as any).GGUI = { GUI, Folder, Button, CheckBox, RangeSlider, ColorWheel, FileUpload };
}

export default { GUI, Folder, Button, CheckBox, RangeSlider, ColorWheel, FileUpload };
