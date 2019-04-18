const {registerBlockType} = wp.blocks;
const {ServerSideRender} = wp.components;

registerBlockType('tw/dynamic-gutenberg-block', {
    title: 'TW Dynamic Block',
    icon: 'smiley',
    category: 'layout',

    edit: (props) => {
        return (
            <ServerSideRender block="tw/dynamic-gutenberg-block" attributes={props.attributes}/>
        );
    },
    save: () => null
});