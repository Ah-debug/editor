import React from 'react';

export const Heading = (props) => {
    const { hasFruit, fruitName } = props;
    return <h1>Fruit name will show { hasFruit ? fruitName : 'Oh no!'}</h1>
};
