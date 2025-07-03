import { useBlockProps, RichText } from '@wordpress/block-editor';

export default function Save({ attributes }) {
    const { title, text, image, url } = attributes;
    const blockProps = useBlockProps.save({
        className: 'menu-item-basic-block'
    });

    return (
        <div {...blockProps}>
            <div 
                className="menu-item-basic__container"
                onClick={url ? `window.location.href='${url}'` : undefined}
                role={url ? 'button' : undefined}
                tabIndex={url ? 0 : undefined}
            >
                {image?.url && (
                    <div className="menu-item-basic__image-container">
                        <img src={image.url} alt={title} className="menu-item-basic__image" />
                    </div>
                )}

                <RichText.Content
                    tagName="h2"
                    value={title}
                    className="menu-item-basic__title"
                />

                <RichText.Content
                    tagName="p"
                    value={text}
                    className="menu-item-basic__text"
                />

                {url && (
                    <div className="menu-item-basic__link">
                        <span className="menu-item-basic__link-text">
                            {__('View more', 'menu-item-basic')}
                        </span>
                    </div>
                )}
            </div>
        </div>
    );
} 