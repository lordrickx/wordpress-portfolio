import { registerBlockType } from '@wordpress/blocks';
import Edit from './edit';
import Save from './save';
import './style.scss';
import './editor.scss';
 
registerBlockType('acrobits/menu-item-card', {
    edit: Edit,
    save: Save,
}); 