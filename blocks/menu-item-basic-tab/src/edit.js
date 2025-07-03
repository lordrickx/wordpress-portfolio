import { useBlockProps, RichText } from '@wordpress/block-editor';
import { __ } from '@wordpress/i18n';

export default function Edit({ attributes, setAttributes }) {
    const { title, paragraph } = attributes;
    const blockProps = useBlockProps();

    return (
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
    );
} 