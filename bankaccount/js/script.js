const $ = (id) => document.getElementById(id);

const bankAccount = ownerName => {
    let balance = 0;
    let owner = ownerName;
    return({
        withdrawl: function(withdrawlAmount) {
            if (withdrawlAmount > balance) {
                alert('Insufficient funds');
            } else {
                withdrawlAmount = parseFloat(withdrawlAmount);
                balance -= withdrawlAmount;
            }
        },

        deposit: function(depositAmount) {
            if (depositAmount < 0) {
                alert ('Enter a valid number');
            } else {
                depositAmount = parseFloat(depositAmount);
                balance += depositAmount;
            }
        },

        getBalance: function() {
            return balance;
        },

        getOwnerName: function() {
            return owner;
        }
    });
}

let account;

window.addEventListener('load', () => {
    let nameBtn = $('nameBtn');
    let depositBtn = $('depositBtn');
    let withdrawlBtn = $('withdrawlBtn');

    nameBtn.addEventListener('click', () => {
        const owner = prompt('Enter your name');
        if (owner) {
            account = bankAccount(owner);
            $('accountName').innerHTML = `${account.getOwnerName()}`;
            $('accountBalance').innerHTML = `${account.getBalance()}`;
        };
    });

    depositBtn.addEventListener('click', () => {
        if (account) {
            let depositAmount = prompt('Enter deposit amount');
            account.deposit(depositAmount);
            $('accountName').innerHTML = `${account.getOwnerName()}`;
            $('accountBalance').innerHTML = `${account.getBalance()}`;
        } else {
            alert('Enter your name');
        }
    });

    withdrawlBtn.addEventListener('click', () => {
        if (account) {
            let withdrawlAmount = prompt('Enter withdrawl amount');
            account.withdrawl(withdrawlAmount);
            $('accountName').innerHTML = `${account.getOwnerName()}`;
            $('accountBalance').innerHTML = `${account.getBalance()}`;
        } else {
            alert('Enter your name')
        }
    });
});