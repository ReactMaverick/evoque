export const convertUnderscoreToCamelCase = (str) => {
    // Replace underscores with spaces and capitalize each word
    const result = str
        .split('_')
        .map(word => word.charAt(0).toUpperCase() + word.slice(1))
        .join(' ');

    return result;
};