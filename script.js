// Promise In JavaScript
const promiseOne = new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log('Async task is complite.');
        resolve();
    }, 2000);
});

promiseOne.then(() => {
    console.log('Promise consumed');
});





const promiseFour = new Promise((resolve, reject) => {
    setTimeout(() => {
        let erroe = false;
        if (!erroe) {
            resolve({ name: "Tofik", state: "Rajasthan" });
        } else {
            reject("ERROR: Something went wrong");
        }
    }, 1000);
});

promiseFour.then((userInfo) => {
    console.log(userInfo);
    return userInfo.name;
}).then((userName) => {
    console.log(userName);
}).catch((err) => {
    console.log(err);
}).finally(() => {
    console.log("Done👍")
});











// async await in JavaScript
const promiseFive = new Promise((resolve, reject) => {
    setTimeout(function () {
        let error = true;
        if (!error) {
            resolve({ language: 'JavaScript', use: 'Developer' });
        } else {
            reject('ERROR: JS went wrong');
        }
    }, 1000);
});

async function consumePromiseFive() {
    try {
        let response = await promiseFive;
        console.log(response);
    } catch (err) {
        console.log(err);
    }

}

consumePromiseFive();





async function getAllUsers() {
    try {
        let response = await fetch('https://jsonplaceholder.typicode.com/users');
        let data = await response.json();
        console.log(data);
    } catch (error) {
        console.log("ERROR!!!", error);
    }
}

getAllUsers()