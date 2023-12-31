export const getRootFolder = (path: string): string => path.split('/')[0];

export const getFolder = (path: string, depth = 1): string => path
    .split('/')
    .slice(0, -1 * depth)
    .join('/');
