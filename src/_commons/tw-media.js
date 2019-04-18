const {MediaUpload} = wp.editor;

class TwMedia extends React.Component {

    // Get this.props
    constructor(props) {
        super(props);
    }

    // When the image is selected then send the content to parent (onChange)
    handleSelect(media) {
        const {size = 'full', field = 'image'} = this.props;
        const obj = {};

        obj[field] = media.sizes[size] ? media.sizes[size].url : media.url;

        this.props.onChange(obj);
    }

    // Simple: handleSelect that return null
    handleRemove() {
        const {field = 'image'} = this.props;
        const obj = {};

        obj[field] = null;
        this.props.onChange(obj);
    }

    // Render handler Function
    handleRender({open}) {
        const {label = 'Aggiungi Media', current = null} = this.props;

        if (!!current) {
            return (<div className="tw-image-field">
                <div className="preview" onClick={open}
                     style={{backgroundImage: `url(${this.props.current})`}}/>

                <div className="actions">
                    <a href="#" onClick={() => this.handleRemove()}> × Remove </a>
                </div>
            </div>);
        }

        return (<a href="#" className="tw-add-image" onClick={open}>{label}</a>)
    }

    // Return JSX
    render() {
        const {type = 'images/*', value = ''} = this.props;

        return (<MediaUpload type={type} value={value} onSelect={media => this.handleSelect(media)}
                             render={({open}) => this.handleRender({open})}/>);
    }
}

export default TwMedia;