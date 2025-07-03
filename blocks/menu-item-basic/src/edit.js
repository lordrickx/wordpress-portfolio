import { useBlockProps, RichText, MediaUpload, MediaUploadCheck, InspectorControls } from '@wordpress/block-editor';
import { Button, TextControl, PanelBody, PanelRow } from '@wordpress/components';
import { __ } from '@wordpress/i18n';

export default function Edit({ attributes, setAttributes }) {
    const { title, text, image, url } = attributes;
    const blockProps = useBlockProps();

    const onSelectImage = (media) => {
        setAttributes({
            image: {
                url: media.url,
                id: media.id
            }
        });
    };

    return (
        <>
            <InspectorControls>
                <PanelBody title={__('Menu Item Settings', 'menu-item-basic')} initialOpen={true}>
                    <PanelRow>
                        <TextControl
                            label={__('URL', 'menu-item-basic')}
                            value={url}
                            onChange={(value) => setAttributes({ url: value })}
                            placeholder={__('Enter URL here', 'menu-item-basic')}
                        />
                    </PanelRow>
                    <PanelRow>
                        <div className="menu-item-basic__field-label">
                            <span className="menu-item-basic__label">Icon Image</span>
                            <span className="menu-item-basic__description">Upload a small icon or logo that represents this menu item (recommended size: 64x64px)</span>
                            <MediaUploadCheck>
                                <MediaUpload
                                    onSelect={onSelectImage}
                                    allowedTypes={['image']}
                                    value={image?.id}
                                    render={({ open }) => (
                                        <div className="menu-item-basic__image">
                                            {image?.url ? (
                                                <div>
                                                    <img src={image.url} alt={title} />
                                                    <Button 
                                                        variant="secondary" 
                                                        onClick={open}
                                                        style={{ marginTop: '10px' }}
                                                    >
                                                        {__('Replace Icon', 'menu-item-basic')}
                                                    </Button>
                                                </div>
                                            ) : (
                                                <Button variant="primary" onClick={open}>
                                                    {__('Upload Icon', 'menu-item-basic')}
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
                <div className="menu-item-basic__container">
                    {image?.url && (
                        <div className="menu-item-basic__image-container">
                            <img src={image.url} alt={title} className="menu-item-basic__image" />
                        </div>
                    )}

                    <RichText
                        tagName="h2"
                        className="menu-item-basic__title"
                        value={title}
                        onChange={(value) => setAttributes({ title: value })}
                        placeholder={__('Add your title here', 'menu-item-basic')}
                    />

                    <RichText
                        tagName="p"
                        className="menu-item-basic__text"
                        value={text}
                        onChange={(value) => setAttributes({ text: value })}
                        placeholder={__('Add your description here', 'menu-item-basic')}
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
        </>
    );
} 