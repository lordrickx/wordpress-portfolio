import { registerBlockType } from '@wordpress/blocks';
import Edit from './edit';
import Save from './save';
import metadata from './block.json';

// Importar estilos
import './style.scss';
import './editor.scss';

registerBlockType(metadata.name, {
    edit: Edit,
    save: Save,
}); 