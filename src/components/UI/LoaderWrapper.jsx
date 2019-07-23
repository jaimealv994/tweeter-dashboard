import React from 'react';

type Props = {
    isLoading: boolean,
    children: any
};
const LoaderWrapper = (props: Props) => {
    const {children, isLoading} = props;

    return (
        <div>
            {children}
            {props.isLoading && "Is loading..."}
        </div>
    )
};

export default LoaderWrapper;
