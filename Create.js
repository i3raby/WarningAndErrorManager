const kCode = Symbol('code');
const { MessagesCollection } = require('./Messages')

/**
 * *`⁕` Create a custom error class that extends a given error type.*
 *
 * *`⁕` This function generates a new custom error class that extends a specified base error type (`ErrorType`). 
 * The custom error class allows you to associate an error code (`key`) with a specific error message, 
 * which is retrieved and formatted using the `getErrMessage` function. The custom error class also provides 
 * properties to access the error code and a formatted error name.*
 *
 * @param { Error | TypeError | RangeError } ErrorType - The base error class to extend, such as `Error` or a custom error class.
 * @returns { Class }
 */

function CreateError(ErrorType) {
    return class Err extends ErrorType {
        constructor(key, ...args) {
            super(getErrorMessage(key, args));
            this[kCode] = key;
        }

        /**
         * Gets the name of the error.
         * @returns { string } The name of the Error.
         */

        get name() {
            return `${super.name} [${this[kCode]}]`;
        }

        /**
         * Gets the error code.
         * @returns { string } The error code.
         */

        get code() {
            return this[kCode];
        }
    }
}

/**
 * Creates a custom TypeError.
 * 
 * @param { string } key The error key.
 * @returns { typeof TypeError } A custom TypeError class.
 */

exports.TypeError = CreateError(TypeError);

/**
 * Creates a custom RangeError.
 * 
 * @param { string } key The error key.
 * @returns {typeof RangeError} A custom RangeError class.
 */

exports.RangeError = CreateError(RangeError);

/**
 * Creates a custom Error.
 * 
 * @param { string } key The error key.
 * @returns {typeof Error} A custom Error class.
 */

exports.Error = CreateError(Error);

/**
 * *`⁕` This function retrieves and formats an error message based on a provided error code (`Key`). 
 * If the error message is a function, it will be executed with the provided arguments (`Args`). 
 * If it's a static message, it will return the message directly, optionally formatting it with the provided arguments.*
 * 
 * @param { String } Key The unique identifier for the error code. This key is used to look up the error message in the registry.
 * @param { Array<string | Function> } [Args] Optional arguments that may be passed to the error message function or used for formatting the static message.
 * @returns { string }
 */

function getErrorMessage(key, args) {
    if(typeof key !== 'string') throw new Error('Error message key must be a string');
    const Msg = MessagesCollection.get(key);
    if(!Msg) throw new Error(`An invalid error message key was used: ${key}.`);
    if(typeof Msg === 'function') return Msg(...args);
    if(!args?.length) return Msg;
    args.unshift(Msg);
    return String(...args);
}

exports.ErrorTypes = {
    TypeError: 'TypeError',
    RangeError: 'RangeError',
    Error: 'Error'
}