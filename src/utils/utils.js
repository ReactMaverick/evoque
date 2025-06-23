export const convertUnderscoreToCamelCase = (str) => {
    // Replace underscores with spaces and capitalize each word
    const result = str
        .split('_')
        .map(word => word.charAt(0).toUpperCase() + word.slice(1))
        .join(' ');

    return result;
};

export const convertWordsToUnderscore = (str) => {
    // Convert "Abc Def" to "abc_def" and remove '.' if present
    const result = str
        .replace(/\./g, '')         // Remove any '.' characters
        .trim()                     // Remove leading/trailing spaces
        .replace(/\s+/g, '_')       // Replace spaces (one or more) with underscores
        .toLowerCase();             // Convert to lowercase

    // console.log(`Converted "${str}" to "${result}"`);
    return result;
};