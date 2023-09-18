import React from 'react';
export interface EditProps {
    label: string;
    value?: string;
    onChange: (value: string) => void;
}
export declare const Edit: ({ label, value, onChange }: EditProps) => React.JSX.Element;
