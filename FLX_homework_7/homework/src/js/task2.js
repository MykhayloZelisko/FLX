let start = confirm("Do you want to play a game?");
if (!start) {
    alert("You did not become a millionaire, but can")
} else {
    while(start) {
        let max = 5;
        let prize = 0;
        let maxPrize =10;
        let cont = true;
        while (cont) {
            let random = Math.floor(Math.random() * (max + 1));
            let t = false;
            for (let i = 1; ; i++) {
                let number = +prompt(`Enter a number from 0 to ${max}
                                    Attempts left: ${4-i}
                                    Total prize: ${prize}
                                    Possible prize on current attempt: ${Math.floor(maxPrize / Math.pow(2, i - 1))}`);
                if (number === random) {
                    prize += Math.floor(maxPrize / Math.pow(2, i - 1));
                    break;
                } else {
                    if (i === 3) {
                        t = true;
                        break;
                    }
                }
            }
            if (t) {
                break;
            }
            cont = confirm(`Congratulation! Your prize is: ${prize}. Do you want to continue?`);
            if (cont) {
                max *= 2;
                maxPrize *=3; 
            } else {
                break;
            }
        }
        alert(`Thank you for a game. Your prize is: ${prize}`);
        start = confirm("Do you want to play again?");
    }
}