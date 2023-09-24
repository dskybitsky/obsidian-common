import React, { ReactNode } from 'react';
export interface LoadingProps {
    loading: boolean;
    children?: ReactNode;
}
export declare const Loading: ({ loading, children }: LoadingProps) => React.JSX.Element;
