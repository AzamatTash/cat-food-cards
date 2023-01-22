export const getStr = (quantity) => {
    if (quantity === 1) {
        return 'мышь';
    }
    if (quantity < 5) {
        return 'мыши';
    }
    if (quantity > 4) {
        return 'мышей';
    }
};
