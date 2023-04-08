import React from 'react';
import  useRefresh  from '../../../CustomHooks/useRefresh';

function withRefresh(WrappedComponent) {
    return function WithRefresh(props) {
        const { refresh, refreshCount } = useRefresh();
        return <WrappedComponent refresh={refresh} refreshCount={refreshCount} {...props} />;
    };
}

export default withRefresh;
