import { mount } from 'marketing/MarketingApp';
import React, { useRef, useEffect } from 'react';
import { useHistory } from 'react-router-dom';

export default () => {
    const ref = useRef(null);
    const history = useHistory();
    useEffect(() => {
        const { onParentNavigate } = mount(ref.current, { 
            initialPath: history.location.pathname,
            onNavigate: ({ pathname: nextPathName }) => {
                const pathName = history.location;
                if(pathName !== nextPathName){
                    history.push(nextPathName);
                }
            },
         });

         history.listen(onParentNavigate);
    }, []);

    return <div className="marketing-class" ref={ref} />

}