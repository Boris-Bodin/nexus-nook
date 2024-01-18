export const fetchInfo: () => {version: string} = function () {
    return {version: process.env['NEXT_VERSION'] ?? ''};
};
