import TwText from "../_commons/tw-text";

const {registerBlockType} = wp.blocks;

registerBlockType('tw/text-gutenberg-block', {
    title: 'TW Text Field',
    icon: 'smiley',
    category: 'layout',
    attributes: {
        title: {
            type: 'string',
            source: "text",
            selector: ".title",
            default: ''
        },
        text: {
            type: 'string',
            source: "text",
            selector: ".text",
            default: ''
        }
    },
    edit: (props) => {

        const {attributes} = props;
        const handleFieldUpdate = (update) => {
            const newObject = {...attributes, ...update};
            props.setAttributes(newObject);
        };

        return (<section className='tw-block'>

            <h4>TW Text Sample</h4>

            <TwText label="Titolo della section" field='title'
                    current={attributes.title} onChange={handleFieldUpdate}/>

            <TwText label="Contenuto testuale" field='text'
                    current={attributes.text} onChange={handleFieldUpdate}/>

        </section>)
    },
    save: ({attributes}) => {
        return (<section>
            <h2 className="title">{attributes.title}</h2>
            <div className="text">{attributes.text}</div>
        </section>);
    },
});
