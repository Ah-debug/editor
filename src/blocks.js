import React from 'react';
import { boolean, text, manager } from './editor';
import { Heading } from './components/Heading';


// Props UI for the WithHeading Block
export const WithHeading = () => {
    const boolVal = boolean('hasFruit', true);
    const textVal = text('fruitName', 'Apple');
    console.log('manager object : ', manager);
    return (<Heading hasFruit={boolVal} fruitName={textVal}/>);
};
