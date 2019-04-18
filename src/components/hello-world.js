const {registerBlockType} = wp.blocks;

registerBlockType('tw/sample-gutenberg-block', {
    title: 'TW Hello World',
    icon: 'smiley',
    category: 'layout',
    edit: () => <div>Hello wp, i'm a static block!</div>,
    save: () => <div>Hello, wp!</div>,
});