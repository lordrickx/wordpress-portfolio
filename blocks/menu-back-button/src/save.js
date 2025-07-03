import { useBlockProps, RichText } from '@wordpress/block-editor';

export default function Save({ attributes }) {
    const { text, level } = attributes;
    const blockProps = useBlockProps.save({
        className: 'menu-back-button-block',
        'data-level': level
    });

    return (
        <div {...blockProps}>
            <button className="menu-back-button">
                <RichText.Content value={text} />
            </button>
        </div>
    );
} 