import PropManager from './PropManager';


/**
 * @type {PropManager} - Exporting the instance of the PropManager class for debugging
 */
export const manager = new PropManager();

/**
 * @param name {string} - The name of the prop
 * @param value {boolean} - The value of the prop
 * @return {boolean} - Returns the value of the prop
 */
export const boolean = (name, value) => {
    // Returns the value of the prop
    return manager.prop(name, { type: 'boolean', value });
};

/**
 * @param name {string} - The name of the prop
 * @param value {string} - The value of the prop
 * @return {text} - Returns the value of the prop
 */
export const text = (name, value) => {
    // Returns the value of the prop
    return manager.prop(name, { type: 'text', value });
};
