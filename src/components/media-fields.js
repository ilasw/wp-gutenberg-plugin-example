import TwText from "../_commons/tw-text";
import TwMedia from "../_commons/tw-media";

const {registerBlockType} = wp.blocks;

registerBlockType('tw/media-gutenberg-block', {
    title: 'TW Media Field',
    icon: 'smiley',
    category: 'layout',
    attributes: {
        title: {
            type: 'string',
            source: "text",
            selector: ".title",
            default: ''
        },
        image: {
            source: "attribute",
            selector: "img.image",
            attribute: "src",
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

            <h4>TW Media Sample</h4>

            <TwText label="Titolo per l'immagine" field='title'
                    current={attributes.title} onChange={handleFieldUpdate}/>

            <TwMedia field='image' current={attributes.image} onChange={handleFieldUpdate}/>

        </section>)
    },
    save: ({attributes}) => {
        return (<section>
            <h2 className="title">{attributes.title}</h2>
            <img className="image" src={attributes.image} alt={attributes.title}/>
        </section>);
    },
});
