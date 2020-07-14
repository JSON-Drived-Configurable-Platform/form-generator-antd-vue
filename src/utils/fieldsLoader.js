let fieldComponents = {};
let optionalFields = require.context('../fields', false, /^\.\/field([\w-_]+)\.js$/);

optionalFields.keys().forEach(key => {
    let compName = key.replace(/^\.\//, '').replace(/\.js/, '');
    fieldComponents[compName] = optionalFields(key).default;
});

export default fieldComponents;
