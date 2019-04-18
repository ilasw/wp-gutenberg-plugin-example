import TwText from "../_commons/tw-text";
import TwMedia from "../_commons/tw-media";

const {registerBlockType} = wp.blocks;
const {__} = wp.i18n;

registerBlockType('tw/addable-gutenberg-block', {
    title: 'TW Addable Text Field',
    icon: 'smiley',
    category: 'layout',
    attributes: {
        title: {
            type: 'string',
            source: "text",
            selector: ".title",
            default: ''
        },

        items: {
            source: "query",
            selector: '.tw-item',
            default: [{index: 0}],
            query: {
                text: {
                    type: 'string',
                    source: "text",
                    selector: ".tw-item-text",
                    default: ''
                },
                image: {
                    source: "attribute",
                    selector: ".tw-item-image",
                    attribute: "src",
                    default: ''
                },
                index: {
                    source: "attribute",
                    selector: ".tw-item-text",
                    attribute: "data-index",
                    default: 0
                }
            }
        }
    },
    edit: (props) => {

        const {attributes} = props;
        const {items} = attributes;

        const handleFieldUpdate = (update) => {
            const newObject = {...attributes, ...update};
            props.setAttributes(newObject);
        };

        // Function for adding a new empty item
        const addItemToItems = () => {
            const newItem = {index: props.attributes.items.length || 0, image: "", text: ""};

            props.setAttributes({
                items: [...props.attributes.items, newItem]
            });
        };

        const editableAddableItems = items.sort((a, b) => a.index - b.index).map(item => {

            // handle update fields
            const handleItemFieldUpdate = (update) => {
                const newObject = {...item, ...update};

                props.setAttributes({
                    items: [...items.filter(el => el.index !== item.index), newObject]
                });
            };

            // Remove an item of list (looped)
            const handleRemoveItem = () => {
                const newItems = items.filter(el => el.index !== item.index).map(t => {
                    t.index = (t.index > item.index) ? (t.index - 1) : t.index;
                    return t;
                });

                props.setAttributes({items: newItems});
            };

            // JSX for single ite in slider
            return (<div className="tw-list-item">
                <h5 className='head'>
                    <span>Elemento {Number(item.index) + 1}:</span>
                    <button className="remove-item" onClick={handleRemoveItem}>{__("Rimuovi")}</button>
                </h5>

                <TwText label="Testo dell'elemento" field='text'
                        current={item.text} onChange={handleItemFieldUpdate}/>

                <TwMedia field={'image'} current={item.image} onChange={handleItemFieldUpdate}/>
            </div>);
        });

        return (<section className='tw-block'>

            <h4>TW Addable Text Sample</h4>

            <TwText label="Titolo della section" field='title'
                    current={attributes.title} onChange={handleFieldUpdate}/>

            <div className="tw-list">{editableAddableItems}</div>

            <div className="tw-actions">
                <button type='button'
                        className="add-more components-button editor-post-publish-button is-button is-default is-primary is-large"
                        onClick={addItemToItems}>{__('Aggiungi elemento')}</button>
            </div>
        </section>)
    },
    save: (props) => {

        const {attributes} = props;
        const {title, items} = attributes;

        console.log(items);

        const listItemsHTML = items.map((item, index) => {

            const {text, image} = item;

            return (<li className="tw-item">
                <h4 className="tw-item-text" data-index={index}>{text}</h4>
                {image && (<img className="tw-item-image" src={image} alt=""/>)}
            </li>)
        });

        return (<section>
            <h2 className="title">{title}</h2>
            <ul className="tw-list">{listItemsHTML}</ul>
        </section>);
    },
});
