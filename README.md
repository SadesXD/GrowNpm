# GrowNpm

## 🔧 Installation
```js
npm install grownpm
```

## 📄 About
**GrowNpm** is simple npm package about the information of the Growtopia status

## 📎 Usage

<b>📕 Basic Information</b>

```js
const gt = require("grownpm");

// Type: [ Promise ]
gt.then(data => {
    console.log(data.online_user);
    // Output: 57144
}).catch(error => {
    console.log(error);
})
```
<b>📚 All Informations</b>
```js
const gt = require("grownpm");

//Type: [ Promise ]
gt.then(data => {
    console.log(data);
    /*
    Output: 
    {
        online_users: '57144',
        wotd: {
            name: 'faerietale',
            image: 'https://www.growtopiagame.com/worlds/faerietale.png'
        },
        time: {
            full_time: 'Jan 5, 2021 2:02 AM',
            date: 'Jan 5, 2021',
            time: '2:02:13 AM'
        }
    }
    */
}).catch(error => {
    console.log(error);
})
```
