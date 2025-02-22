
// EXERCISE 8
// Return an array with a bank account object with the greatest balance value
// Array example: bankAccounts in /data/data.js
// getClientWithGreatestBalance(bankAccounts) => [{ name: 'SomeName', balance: 32, ... }]


export function getClientWithGreatestBalance(array) {
    let balances = [];
    let greatestBalance = 0;
    let client = [];
    for (let account of array) {
        balances.push(account.balance);
    }
    for (let balance in balances) {
        if (balances[balance] > greatestBalance) {
            greatestBalance = balances[balance];
        }
    }
    for (let account of array) {
        if (account.balance === greatestBalance) {
            client.push(account);
        }
    }   return client;
}


// === TEST YOURSELF ===
// Once you're finished run the test with "npm run test-8"
// If the test has all tests passed, switch to the next exercise file
// If any of the tests fails, refactor the code and run the test command after you've fixed the function
