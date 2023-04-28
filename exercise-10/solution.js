var bankAccount = {
    id: 12345,
    owner: 'Dadaşbala müəllim',
    balance: 3000,
    currency: 'AZN',
    block: function () {
        console.log('Blocking account...');
    },
    unblock: function () {
        console.log('Unblocking account...');
    },
    transfer: function (amount, to) {
        console.log('Transferring ' + amount + ' AZN to ' + to);
    },
};
