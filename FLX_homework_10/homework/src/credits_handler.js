function userCard(number) {
    let obj = {};
    obj.key = number;
    obj.balance = 100;
    obj.transactionLimit = 100;
    obj.historyLogs = [];

    obj.getCardOption = function () {
        let obj1 = {
                key: this.key, 
                balance: this.balance, 
                transactionLimit: this.transactionLimit,
                historyLogs: this.historyLogs
        } 
        return obj1;
    }
    
    obj.putCredits = function (number) {
        this.balance += number;
        let t = new Date();
        let str1 = `${t.getDate()}/${t.getMonth()+1}/${t.getFullYear()}, `;
        let str2 = `${t.getHours()}:${t.getMinutes()}:${t.getSeconds()}`;
        let obj = {
            oprerationType: 'Received credits',
            credits: number,
            operationTime: str1 + str2
        }
        this.historyLogs.push(obj);
    }

    obj.takeCredits = function (number) {
        if (this.balance >= number && this.transactionLimit >= number) {
            this.balance -= number;
            let t = new Date();
            let str1 = `${t.getDate()}/${t.getMonth()+1}/${t.getFullYear()}, `;
            let str2 = `${t.getHours()}:${t.getMinutes()}:${t.getSeconds()}`;
            let obj = {
                oprerationType: 'Withdrawal of credits',
                credits: number,
                operationTime: str1 + str2
            }
            this.historyLogs.push(obj);
        } else {
            console.error(`Credits are greater than ${number > this.balance ? 'balance' : 'transaction limit'}`)
        }
    }

    obj.setTransactionLimit = function(number) {
        this.transactionLimit = number;
        let t = new Date();
        let str1 = `${t.getDate()}/${t.getMonth()+1}/${t.getFullYear()}, `;
        let str2 = `${t.getHours()}:${t.getMinutes()}:${t.getSeconds()}`;
        let obj = {
            oprerationType: 'Transaction limit change',
            credits: number,
            operationTime: str1 + str2
        }
        this.historyLogs.push(obj);
    }

    obj.transferCredits = function(number, card) {
        const tax = 1.005;
        this.takeCredits(number * tax);
        card.putCredits(number);
    }

    return obj;
}

function UserAccount(name) {
    this.name = name;
    this.cards = [];
    this.addCard = function() {
        let n = 3;
        if (this.cards.length < n) {
            this.cards[this.cards.length] = userCard(this.cards.length + 1)
        }
    }
    this.getCardByKey = function (number) {
        return this.cards[number - 1];
    }
}

let user = new UserAccount('Bob');
user.addCard()
user.addCard()

let card1 = user.getCardByKey(1);
let n = 2;
let card2 = user.getCardByKey(n);

let p = 500;
card1.putCredits(p);
let s = 800;
card1.setTransactionLimit(s);
let tr = 300;
card1.transferCredits(tr, card2);

let t = 50
card2.takeCredits(t);

console.log(card1.getCardOptions());

console.log(card2.getCardOptions()); 
