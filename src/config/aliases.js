const aliases = (prefix = `src`) => ({
    '@components': `./components`,
    '@config': `${prefix}/config`,
    '@assets': `${prefix}/assets`,
    '@utils': `${prefix}/utils`,
    '@pages': `${prefix}/pages`,
    '@storybookHelpers': `../.storybook/helpers`,
});

module.exports = aliases;