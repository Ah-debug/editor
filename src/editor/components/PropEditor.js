import React, { useState } from 'react';


const styles = {
    editor: {
        position: 'fixed',
        right: 0,
        bottom: 0,
        left: 0,
        zIndex: 1030,
        backgroundColor: '#f8f9fa',
        padding: '32px 0'
    },
    container: {
        width: '100%',
        paddingLeft: '32px',
        paddingRight: '32px',
        marginLeft: 'auto',
        marginRight: 'auto',
        maxWidth: '1440px'
    },
    noProps: {
       fontSize: '16px',
       color: 'rgba(0,0,0,0.85)',
       marginBottom: 0
    },
};

export const PropEditor = () => {

    const [getProps, setProps] = useState({ props: {} });

    // de-structure properties from the state
    const { props } = getProps;

    // get all object properties as an array
    const propsArray = Object.keys(props);

    const filterProps = propsArray.filter(key => {
        return props[key].used;
    });

   const mapProps =  filterProps.map(key => {
        return props[key];
    });

    if (mapProps.length === 0) {
        return (
            <div style={styles.editor}>
                <div style={styles.container}>
                    <h1 style={styles.noProps}>No Props</h1>
                </div>
            </div>
        );
    }


    return (
            <div style={styles.editor}>
                <div style={styles.container}>
                    <p>State is updated with new store: { JSON.stringify(getProps) }</p>
                </div>
            </div>
    );

};
