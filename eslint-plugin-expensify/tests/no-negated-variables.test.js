const RuleTester = require('eslint').RuleTester;
const rule = require('../no-negated-variables');
const message = require('../CONST').MESSAGE.NO_NEGATED_VARIABLES;

const ruleTester = new RuleTester({
    parserOptions: {
        ecmaVersion: 6,
        sourceType: 'module',
    },
});

ruleTester.run('no-negated-variables', rule, {
    valid: [
        {
            code: 'const isValid = true;',
        },
        {
            code: 'function isValidName() {}',
        },
        {
            code: 'const notificationSettings = {};',
        },
        {
            code: 'const iPhonesWithNotches = [];',
        },
    ],
    invalid: [
        {
            code: 'const isNotValid = true;',
            errors: [{
                message,
            }],
        },
        {
            code: 'function isNotValidName() {}',
            errors: [{
                message,
            }],
        },
    ],
});