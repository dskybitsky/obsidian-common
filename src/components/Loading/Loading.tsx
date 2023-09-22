import React, { ReactNode } from 'react';

export interface LoadingProps {
    loading: boolean;
    children?: ReactNode;
}

export const Loading = ({ loading, children }: LoadingProps) => {
    if (loading) {
        return <span className="loading">Loading...</span>;
    }

    // eslint-disable-next-line react/jsx-no-useless-fragment
    return <>{children}</>;
};
