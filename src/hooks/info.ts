export const getInfo: () => {version: string} = function () {
    return {version: process.env['VERSION'] ?? ''};
};
