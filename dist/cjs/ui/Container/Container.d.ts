import React, { ReactNode } from 'react';
export interface ContainerProps {
    loading: boolean;
    className?: string;
    children?: ReactNode;
}
export declare const Container: ({ loading, className, children }: ContainerProps) => React.JSX.Element;
