// const roomClass = {
//     standard2: {
//         _id: "67rdca3eeb7f6class771811",
//         name: "Стандарт",
//         title: "Номер стандарт",
//         numberOfGuests: 2,
//         price: 35
//     },
//     standard3: {
//         _id: "67rdca3eeb7f6class771822",
//         name: "Стандарт",
//         title: "Номер стандарт",
//         numberOfGuests: 3,
//         price: 45
//     },
//     suite2: {
//         _id: "67rdca3eeb7f6class771833",
//         name: "Полулюкс",
//         title: "Просторный номер",
//         numberOfGuests: 2,
//         price: 55
//     },
//     suite3: {
//         _id: "67rdca3eeb7f6class771844",
//         name: "Полулюкс",
//         title: "Просторный номер",
//         numberOfGuests: 3,
//         price: 65
//     },
//     senior: {
//         _id: "67rdca3eeb7f6class7718255",
//         name: "Люкс",
//         title: "Большой люкс",
//         numberOfGuests: 2,
//         price: 75
//     }
// };

const rooms = [
    {
        _id: "67rdca3eeb7f6fgeed471855",
        number: 1,
        class: "standard",
        blockTitle: "Стандарт",
        title: "Номер стандарт",
        numberOfGuests: 2,
        price: 35,
        available: false,
        type: ""
    },
    {
        _id: "67rdca3eeb7f6fgeed471806",
        number: 2,
        class: "standard",
        blockTitle: "Стандарт",
        title: "Номер стандарт",
        numberOfGuests: 3,
        price: 45,
        available: false,
        type: ""
    },
    {
        _id: "67rdca3eeb7f6fgeed471317",
        number: 3,
        class: "standard",
        blockTitle: "Стандарт",
        title: "Номер стандарт",
        numberOfGuests: 2,
        price: 35,
        available: true,
        type: ""
    },
    {
        _id: "67rdca3eeb7f6fgeed471018",
        number: 4,
        class: "suite",
        blockTitle: "Полулюкс",
        title: "Просторный номер",
        numberOfGuests: 3,
        price: 65,
        available: true,
        type: ""
    },
    {
        _id: "67rdca3eeb7f6fgeed471115",
        number: 5,
        class: "standard",
        blockTitle: "Стандарт",
        title: "Номер стандарт",
        numberOfGuests: 2,
        price: 35,
        available: true,
        type: ""
    },
    {
        _id: "67rdca3eeb7f6fgeed471080",
        number: 6,
        class: "standard",
        blockTitle: "Стандарт",
        title: "Номер стандарт",
        numberOfGuests: 3,
        price: 45,
        available: true,
        type: ""
    },
    {
        _id: "67rdca3eeb7f6fgeed471621",
        number: 7,
        class: "standard",
        blockTitle: "Стандарт",
        title: "Номер стандарт",
        numberOfGuests: 2,
        price: 35,
        available: true,
        type: ""
    },
    {
        _id: "67rdca3eeb7f6fgeed471102",
        number: 8,
        class: "standard",
        blockTitle: "Стандарт",
        title: "Номер стандарт",
        numberOfGuests: 3,
        price: 45,
        available: true,
        type: ""
    },
    {
        _id: "67rdca3eeb7f6fgeed471470",
        number: 9,
        class: "standard",
        blockTitle: "Стандарт",
        title: "Номер стандарт",
        numberOfGuests: 2,
        price: 35,
        available: true,
        type: ""
    },
    {
        _id: "67rdca3eeb7f6fgeed471824",
        number: 10,
        class: "senior",
        blockTitle: "Люкс",
        title: "Большой люкс",
        numberOfGuests: 2,
        price: 75,
        available: true,
        type: ""
    },
    {
        _id: "67rdca3eeb7f6fgeed47181f",
        number: 11,
        class: "suite",
        blockTitle: "Полулюкс",
        title: "Просторный номер",
        numberOfGuests: 2,
        price: 55,
        available: true,
        type: ""
    },
    {
        _id: "67rdca3eeb7f6fgeed47391r",
        number: 12,
        class: "standard",
        blockTitle: "Стандарт",
        title: "Номер стандарт",
        numberOfGuests: 2,
        price: 35,
        available: true,
        type: ""
    }
];

// if (!localStorage.getItem("users")) {
//     localStorage.setItem("users", JSON.stringify(users));
// }

// const fetchAll = () =>
//     new Promise((resolve) => {
//         window.setTimeout(function () {
//             resolve(JSON.parse(localStorage.getItem("users")));
//         }, 2000);
//     });
// const update = (id, data) =>
//     new Promise((resolve) => {
//         const users = JSON.parse(localStorage.getItem("users"));
//         const userIndex = users.findIndex((u) => u._id === id);
//         users[userIndex] = { ...users[userIndex], ...data };
//         localStorage.setItem("users", JSON.stringify(users));
//         resolve(users[userIndex]);
//     });

// const getById = (id) =>
//     new Promise((resolve) => {
//         window.setTimeout(function () {
//             resolve(
//                 JSON.parse(localStorage.getItem("users")).find(
//                     (user) => user._id === id
//                 )
//             );
//         }, 1000);
//     });
// export default {
//     fetchAll,
//     getById,
//     update
// };

const fetchAll = () =>
    new Promise((resolve) => {
        window.setTimeout(function () {
            resolve(rooms);
        }, 2000);
    });

export default {
    fetchAll
};
