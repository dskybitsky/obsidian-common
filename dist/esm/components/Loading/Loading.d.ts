import React, { ReactNode } from 'react';
export interface LoadingProps {
    loading: boolean;
    children?: ReactNode;
}
export declare const Loading: ({ loading, children }: LoadingProps) => string | number | boolean | Iterable<React.ReactNode> | React.JSX.Element | null | undefined;
