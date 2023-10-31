import { mount } from 'auth/AuthApp';
import React, { useRef, useEffect } from 'react';
import { useHistory } from 'react-router-dom';

export default ({ onSignIn, onSignOut }) => {
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
            onSignIn,
            onSignOut
         });

         history.listen(onParentNavigate);
    }, []);

    return <div className="auth-class" ref={ref} />

}