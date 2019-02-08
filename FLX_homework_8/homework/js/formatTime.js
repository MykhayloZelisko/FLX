function formatTime(n) {
    let min = n % 60;
    let hour = (n - min) / 60 % 24;
    let day = ((n - min) / 60 - hour) / 24;
    return (`${day} day(s) ${hour} hour(s) ${min} minute(s)`);
}

formatTime(456987);