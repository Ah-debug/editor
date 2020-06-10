import React from 'react';
import './index.css';
import { PropEditor } from './editor/components/PropEditor';
import { WithHeading } from './blocks';

const App = () => {
    return (
        <div className="App">
            {/* PropEditor */}
            <PropEditor/>
            {/* Blocks */}
            <WithHeading/>
        </div>
    );
};

export default App;
