import React, { ReactNode } from 'react';

export interface ContainerProps {
    loading: boolean;
    className ?: string;
    children?: ReactNode;
}

export const Container = ({ loading, className, children }: ContainerProps) => {
    if (loading) {
        return <span className="loading">Loading...</span>;
    }

    return <div className={className}>{children}</div>;
};
