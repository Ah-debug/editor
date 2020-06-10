import PropStore from './PropStore';
import deepEqual from 'deep-equal';

// This is used by _mayCall method to determine how long to wait to before
// triggering a PropEditor to update But I don't know how to trigger or
// re-render the PropEditor state with the populated store
const PROP_EDITOR_UPDATE_INTERVAL = 400;

class PropManager {

    propStore = new PropStore();

    /**
     * @param name {string} - The name of the prop
     * @param options {Object} - The prop with some additional properties
     * @return {*} - Returns the associated value of the prop
     */
    prop(name, options) {
        this._mayCall();
        // propStore instance
        const { propStore } = this;
        // Get existing prop
        const existingProp = propStore.get(name);
        // If existingProp is not undefined then match options.value &&
        // existingProp.defaultValue otherwise it will not work
        if (existingProp && deepEqual(options.value, existingProp.defaultValue)) {
            return existingProp.value;
        }
        const defaultValue = options.value;
        // Create an object and merge with additional properties like `defaultValue`
        const propObject = {
            ...options,
            name,
            defaultValue,
        };
        // Set the value for the prop i.e. an object with additional properties
        propStore.set(name, propObject);
        // Returns the associated value of the prop
        return propStore.get(name).value;
    };


    _mayCall() {
        if (this.calling) {
            return;
        }
        this.calling = true;

        setTimeout(() => {
            this.calling = false;
            // **************************************
            // Here I want to re-render or communicate
            // with the `PropEditor` component to pass the
            // populated store on its state
            // **************************************
        }, PROP_EDITOR_UPDATE_INTERVAL);
    }
}

export default PropManager;
