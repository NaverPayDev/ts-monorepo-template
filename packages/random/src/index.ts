// get 0~9 integer
export const getDigit = () => Math.floor(Math.random() * 10);

export const generateDigit = () => Math.floor(Math.random() * 10);

export function get10Digit() {
    return Array.from({ length: 10 }).map(() => getDigit());
}
