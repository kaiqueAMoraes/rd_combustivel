import React from 'react';

import './box-container.styles.scss';

const BoxContainer = ({children, classname}) => (
    <div className={`${classname ? classname : '' } box-container`}>
        {children}
    </div>
)
export default BoxContainer;