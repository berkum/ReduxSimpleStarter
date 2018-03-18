export function displayCombined(item) {
    console.log('A dual selection is available: ', item);
    return {
        type: 'DUAL_SELECTION',
        payload: item
    };
}