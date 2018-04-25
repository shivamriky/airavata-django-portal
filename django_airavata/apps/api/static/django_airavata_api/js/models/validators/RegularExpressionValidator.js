
export default class RegularExpressionValidator {

    constructor(config=null) {
        if (typeof config === 'string') {
            this.regex = new RegExp(config);
        } else if (typeof config === 'object') {
            this.regex = new RegExp(config['value']);
            if ('message' in config) {
                this.customErrorMessage = config['message'];
            }
        }
    }

    validate(value) {
        if (value === null || typeof value === 'undefined') {
            return null;
        }
        if (typeof value !== 'string') {
            value = value.toString();
        }
        if (!value.match(this.regex)) {
            return this.getErrorMessage(value);
        }
        return null;
    }

    getErrorMessage(value) {
        if (this.customErrorMessage) {
            return this.customErrorMessage;
        } else {
            return "The value must match the regular expression " + this.regex;
        }
    }
}