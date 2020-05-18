function mod(n, m) {
    return ((n % m) + m) % m;
}

function numsOnly(v) {
    return v.replace(/[^0-9]/g, '');
}

function diceTypeFormat(v) {
    const result = numsOnly(v);
    if (result === '') {
        return '';
    }
    return 'k' + result;
}

function distanceFormat(v, unit) {
    const result = numsOnly(v);
    if (result === '') {
        return '';
    }
    return result + unit;
}

export { mod, numsOnly, diceTypeFormat, distanceFormat };