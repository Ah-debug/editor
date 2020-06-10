// We have to figure out the data structure for our `props editor`
// something to store all the `prop name` as a string and options (ui types) ties to that prop.
// ES6 React classes
// -----
// We dont need to bind properties in a constructor
// Babel has a plugin for ES7 class properties proposal that will
// automatically do this for us.
class PropStore {

    /**
     * The store type will be an object
     * @type {{}}
     */
    store = {};

    // Class methods
    /**
     * Check if the `store object` contains the property
     * @param key {string} - The name of the prop
     * @return {boolean} - Returns true or false
     */
    has(key) {
        return this.store[key] !== undefined;
    };

    /**
     * Set the property and its value inside our `store object`
     * @param key {string} - The name of the prop
     * @param value {Object} - The value for the prop will be an object
     * with additional properties
     */
    set(key, value) {
        this.store[key] = value;
        // used is the dynamic boolean property bind to the object to track
        // if the following property is used or not
        // Default it is set to true
        this.store[key].used = true;
    };

    /**
     * If the value of the prop is found then mark that prop as used
     * @param key {string} - The name of the prop
     * @return {*} - Returns the value of the prop
     */
    get(key) {
        const val = this.store[key];
        // If it is not undefined then set the `used` property to true
        if (val) {
            val.used = true;
        }
        return val;
    };


    /**
     * Get all the store data
     * @return {Object} - Returns the store object
     */
    getAll() {
        return this.store;
    };

    /**
     * Reset the store
     */
    reset() {
        this.store = {};
    };

    /**
     * Mark all properties to unused
     */
    markAllUnused() {
        Object.keys(this.store).forEach(property => {
            this.store[property].used = false;
        });
    };

}

export default PropStore;
