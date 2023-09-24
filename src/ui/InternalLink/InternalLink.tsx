import React from 'react';

export interface InternalLinkProps {
    path: string;
    children?: React.ReactNode;
}

export const InternalLink = ({ path, children }: InternalLinkProps) => (
    <a data-href={path} href={path} className="internal-link">
        {children}
    </a>
);
