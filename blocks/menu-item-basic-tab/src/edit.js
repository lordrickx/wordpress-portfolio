import { useBlockProps, RichText, InspectorControls } from '@wordpress/block-editor';
import { TextControl, PanelBody, PanelRow } from '@wordpress/components';
import { __ } from '@wordpress/i18n';

export default function Edit({ attributes, setAttributes }) {
    const { title, paragraph, url } = attributes;
    const blockProps = useBlockProps();

    return (
        <>
            <InspectorControls>
                <PanelBody title={__('Menu Item Settings', 'menu-item-basic-tab')} initialOpen={true}>
                    <PanelRow>
                        <TextControl
                            label={__('URL', 'menu-item-basic-tab')}
                            value={url}
                            onChange={(value) => setAttributes({ url: value })}
                            placeholder={__('Enter URL here', 'menu-item-basic-tab')}
                        />
                    </PanelRow>
                </PanelBody>
            </InspectorControls>

            <div {...blockProps}>
                <div className="menu-item-basic-tab__container">
                    <RichText
                        tagName="h3"
                        className="menu-item-basic-tab__title"
                        value={title}
                        onChange={(value) => setAttributes({ title: value })}
                        placeholder={__('Add your title here', 'acrobits')}
                    />
                    <RichText
                        tagName="p"
                        className="menu-item-basic-tab__paragraph"
                        value={paragraph}
                        onChange={(value) => setAttributes({ paragraph: value })}
                        placeholder={__('Add your paragraph here', 'acrobits')}
                    />
                </div>
            </div>
        </>
    );
} 