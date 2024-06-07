export const distinct = (src, selector) => {
    const repo = new Map();
    const result = [];
    for (let i = 0; i < src.length; i += 1) {
        const currentKey = selector(src[i]);
        if (!repo.has(currentKey)) {
            repo.set(currentKey, true);
            result.push(src[i]);
        }
    }
    return result;
};
