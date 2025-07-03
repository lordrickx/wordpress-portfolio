import { useBlockProps, RichText } from '@wordpress/block-editor';

export default function Save({ attributes }) {
    const { title, paragraph, url } = attributes;
    const blockProps = useBlockProps.save({
        className: 'menu-item-basic-tab-block'
    });

    return (
        <div {...blockProps}>
            <div 
                className="menu-item-basic-tab__container"
                onClick={url ? `window.location.href='${url}'` : undefined}
                role={url ? 'button' : undefined}
                tabIndex={url ? 0 : undefined}
            >
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