import { useBlockProps, RichText } from '@wordpress/block-editor';

export default function Save({ attributes }) {
    const { title, text, image, featuredImage, backgroundImage, url } = attributes;
    const blockProps = useBlockProps.save({
        className: 'menu-item-card-block'
    });

    const containerClasses = [
        'menu-item-card__container',
        backgroundImage?.url ? 'has-background-image' : '',
        url ? 'has-link' : ''
    ].filter(Boolean).join(' ');

    return (
        <div {...blockProps}>
            <div 
                className={containerClasses}
                style={backgroundImage?.url ? { 
                    '--background-image': `url(${backgroundImage.url})`
                } : {}}
                onClick={url ? `window.open('${url}', '_blank')` : undefined}
                role={url ? 'button' : undefined}
                tabIndex={url ? 0 : undefined}
            >
                <div className="menu-item-card__image-container">
                    {image?.url && (
                        <div className="menu-item-card__image">
                            <img src={image.url} alt={title} />
                        </div>
                    )}
                    <RichText.Content
                        tagName="h2"
                        value={title}
                        className="menu-item-card__title"
                    />
                    <RichText.Content
                        tagName="p"
                        value={text}
                        className="menu-item-card__text"
                    />
                </div>

                <div className="menu-item-card__featured-image-container">
                    {featuredImage?.url && (
                        <div className="menu-item-card__featured-image">
                            <img src={featuredImage.url} alt={title} />
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
} 