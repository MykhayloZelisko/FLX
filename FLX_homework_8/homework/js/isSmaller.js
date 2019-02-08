function isBigger(x, y) {
    return (x > y);
}

function isSmaller(x, y) {
    return (!isBigger(x, y));
}

isSmaller(2, -3);