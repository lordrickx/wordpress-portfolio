import { useBlockProps, RichText, MediaUpload, MediaUploadCheck, InspectorControls } from '@wordpress/block-editor';
import { Button, TextControl, PanelBody, PanelRow } from '@wordpress/components';
import { __ } from '@wordpress/i18n';

export default function Edit({ attributes, setAttributes }) {
    const { title, text, image, featuredImage, backgroundImage, url } = attributes;
    const blockProps = useBlockProps();

    const onSelectImage = (media) => {
        setAttributes({
            image: {
                url: media.url,
                id: media.id
            }
        });
    };

    const onSelectFeaturedImage = (media) => {
        setAttributes({
            featuredImage: {
                url: media.url,
                id: media.id
            }
        });
    };

    const onSelectBackgroundImage = (media) => {
        setAttributes({
            backgroundImage: {
                url: media.url,
                id: media.id
            }
        });
    };

    return (
        <>
            <InspectorControls>
                <PanelBody title={__('Menu Item Settings', 'menu-item-card')} initialOpen={true}>
                    <PanelRow>
                        <TextControl
                            label={__('URL', 'menu-item-card')}
                            value={url}
                            onChange={(value) => setAttributes({ url: value })}
                            placeholder={__('Enter URL here', 'menu-item-card')}
                        />
                    </PanelRow>
                    <PanelRow>
                        <div className="menu-item-card__field-label">
                            <span className="menu-item-card__label">Background Image</span>
                            <span className="menu-item-card__description">Upload an image that will be used as the background of the card</span>
                            <MediaUploadCheck>
                                <MediaUpload
                                    onSelect={onSelectBackgroundImage}
                                    allowedTypes={['image']}
                                    value={backgroundImage?.id}
                                    render={({ open }) => (
                                        <div className="menu-item-card__background-image">
                                            {backgroundImage?.url ? (
                                                <div>
                                                    <img src={backgroundImage.url} alt={title} />
                                                    <Button 
                                                        variant="secondary" 
                                                        onClick={open}
                                                        style={{ marginTop: '10px' }}
                                                    >
                                                        {__('Replace Background Image', 'menu-item-card')}
                                                    </Button>
                                                </div>
                                            ) : (
                                                <Button variant="primary" onClick={open}>
                                                    {__('Upload Background Image', 'menu-item-card')}
                                                </Button>
                                            )}
                                        </div>
                                    )}
                                />
                            </MediaUploadCheck>
                        </div>
                    </PanelRow>

                    <PanelRow>
                        <div className="menu-item-card__field-label">
                            <span className="menu-item-card__label">Icon Image</span>
                            <span className="menu-item-card__description">Upload a small icon or logo that represents this menu item (recommended size: 64x64px)</span>
                            <MediaUploadCheck>
                                <MediaUpload
                                    onSelect={onSelectImage}
                                    allowedTypes={['image']}
                                    value={image?.id}
                                    render={({ open }) => (
                                        <div className="menu-item-card__image">
                                            {image?.url ? (
                                                <div>
                                                    <img src={image.url} alt={title} />
                                                    <Button 
                                                        variant="secondary" 
                                                        onClick={open}
                                                        style={{ marginTop: '10px' }}
                                                    >
                                                        {__('Replace Icon', 'menu-item-card')}
                                                    </Button>
                                                </div>
                                            ) : (
                                                <Button variant="primary" onClick={open}>
                                                    {__('Upload Icon', 'menu-item-card')}
                                                </Button>
                                            )}
                                        </div>
                                    )}
                                />
                            </MediaUploadCheck>
                        </div>
                    </PanelRow>

                    <PanelRow>
                        <div className="menu-item-card__field-label">
                            <span className="menu-item-card__label">Featured Image</span>
                            <span className="menu-item-card__description">A larger image that will be displayed at the bottom of the card</span>
                            <MediaUploadCheck>
                                <MediaUpload
                                    onSelect={onSelectFeaturedImage}
                                    allowedTypes={['image']}
                                    value={featuredImage?.id}
                                    render={({ open }) => (
                                        <div className="menu-item-card__featured-image">
                                            {featuredImage?.url ? (
                                                <div>
                                                    <img src={featuredImage.url} alt={title} />
                                                    <Button 
                                                        variant="secondary" 
                                                        onClick={open}
                                                        style={{ marginTop: '10px' }}
                                                    >
                                                        {__('Replace Featured Image', 'menu-item-card')}
                                                    </Button>
                                                </div>
                                            ) : (
                                                <Button variant="primary" onClick={open}>
                                                    {__('Upload Featured Image', 'menu-item-card')}
                                                </Button>
                                            )}
                                        </div>
                                    )}
                                />
                            </MediaUploadCheck>
                        </div>
                    </PanelRow>
                </PanelBody>
            </InspectorControls>

            <div {...blockProps}>
                <div 
                    className={[
                        'menu-item-card__container',
                        backgroundImage?.url ? 'has-background-image' : '',
                        url ? 'has-link' : ''
                    ].filter(Boolean).join(' ')}
                    style={backgroundImage?.url ? { 
                        '--background-image': `url(${backgroundImage.url})`
                    } : {}}
                    onClick={url ? () => window.open(url, '_blank') : undefined}
                    role={url ? 'button' : undefined}
                    tabIndex={url ? 0 : undefined}
                >
                    {image?.url && (
                        <div className="menu-item-card__image-container">
                            <img src={image.url} alt={title} className="menu-item-card__image" />
                        </div>
                    )}

                    <RichText
                        tagName="h2"
                        className="menu-item-card__title"
                        value={title}
                        onChange={(value) => setAttributes({ title: value })}
                        placeholder={__('Add your title here', 'menu-item-card')}
                    />

                    <RichText
                        tagName="p"
                        className="menu-item-card__text"
                        value={text}
                        onChange={(value) => setAttributes({ text: value })}
                        placeholder={__('Add your description here', 'menu-item-card')}
                    />

                    {featuredImage?.url && (
                        <div className="menu-item-card__featured-image-container">
                            <img src={featuredImage.url} alt={title} className="menu-item-card__featured-image" />
                        </div>
                    )}
                </div>
            </div>
        </>
    );
} 