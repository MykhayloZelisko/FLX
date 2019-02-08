function reverseNumber(n) {
    let inp = n;
    let res = 0;
    while (inp !== 0) {
        res = 10 * res + inp % 10;
        inp = Math.trunc(inp / 10);
    }
    return res;
}

reverseNumber(125403);