import { registerBlockType } from '@wordpress/blocks';
import './style.scss';
import Edit from './edit';
import Save from './save';

registerBlockType('acrobits/menu-back-button', {
    edit: Edit,
    save: Save,
}); 