const {PlainText} = wp.editor;

class TwText extends React.Component {

    // Get this.props
    constructor(props) {
        super(props);
    }

    // When the text is selected then send the content to parent (onTextChange)
    handleChange(content) {

        const {field = 'content'} = this.props;
        const obj = {};

        obj[field] = content || '';

        this.props.onChange(obj);
    }

    // Return JSX
    render() {
        const {current = '', placeholder = 'Text', classes = 'content-plain-text', label = ''} = this.props;

        return (<label>
            {label && <span className="label">{label}</span>}
            <PlainText className={classes} style={{height: 58}}
                       placeholder={placeholder} value={current}
                       onChange={content => this.handleChange(content)}/>
        </label>);
    }
}

export default TwText;