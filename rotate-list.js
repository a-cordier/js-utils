/**
 * A modulo function that works with negative values
 * @param {Number} a 
 * @param {Number} b 
 */
function mod(a, b) {
    return ((a % b) + b) % b;
}

/**
 * Rotates a list in place from index `from`, by `count` elements
 * if count is negative, rotates the list to le left, else rotates
 * the list to the right
 * @param {Array} list 
 * @param {Number} count 
 * @param {Number} from 
 */
function rotate(list, count, from = 0) {
    const { length } = list;
    const n = mod(count, length);
    const x = list[from];
    if (from < length - 1) {
        rotate(list, n, from + 1)
    }
    const pos = mod(from + n, length);
    list[pos] = x;
}
