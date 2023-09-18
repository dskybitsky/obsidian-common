import React from 'react';
export interface InternalLinkProps {
    path: string;
    children?: React.ReactNode;
}
export declare const InternalLink: ({ path, children }: InternalLinkProps) => React.JSX.Element;
