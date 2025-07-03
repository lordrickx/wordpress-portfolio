import { useBlockProps, RichText } from '@wordpress/block-editor';
import { __ } from '@wordpress/i18n';

export default function Edit({ attributes, setAttributes }) {
    const { text } = attributes;
    const blockProps = useBlockProps();

    return (
        <div {...blockProps}>
            <button className="menu-back-button">
                <RichText
                    value={text}
                    onChange={(value) => setAttributes({ text: value })}
                    placeholder={__('Back', 'menu-back-button')}
                />
            </button>
        </div>
    );
} 