import { useBlockProps, RichText } from '@wordpress/block-editor';

export default function Save({ attributes }) {
    const { title, paragraph } = attributes;
    const blockProps = useBlockProps.save({
        className: 'menu-item-basic-tab-block'
    });

    return (
        <div {...blockProps}>
            <div className="menu-item-basic-tab__container">
                <RichText.Content
                    tagName="h3"
                    value={title}
                    className="menu-item-basic-tab__title"
                />
                <RichText.Content
                    tagName="p"
                    value={paragraph}
                    className="menu-item-basic-tab__paragraph"
                />
            </div>
        </div>
    );
} 