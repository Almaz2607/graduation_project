// const professions = {
//     doctor: { _id: "67rdca3eeb7f6fgeed471818", name: "Доктор" },
//     waiter: { _id: "67rdca3eeb7f6fgeed471820", name: "Официант" },
//     physics: { _id: "67rdca3eeb7f6fgeed471814", name: "Физик" },
//     engineer: { _id: "67rdca3eeb7f6fgeed471822", name: "Инженер" },
//     actor: { _id: "67rdca3eeb7f6fgeed471824", name: "Актер" },
//     cook: { _id: "67rdca3eeb7f6fgeed471829", name: "Повар" }
// }
// const qualities = {
//     tedious: { _id: "67rdca3eeb7f6fgeed471198", name: "Нудила", color: "primary" },
//     strange: { _id: "67rdca3eeb7f6fgeed471100", name: "Странный", color: "secondary" },
//     buller: { _id: "67rdca3eeb7f6fgeed4711012", name: "Троль", color: "success" },
//     alcoholic: { _id: "67rdca3eeb7f6fgeed471101", name: "Алкоголик", color: "danger" },
//     handsome: { _id: "67rdca3eeb7f6fgeed471102", name: "Красавчик", color: "info" },
//     uncertain: { _id: "67rdca3eeb7f6fgeed471103", name: "Неуверенный", color: "dark" },

// }

const rooms = [
    {
        _id: "67rdca3eeb7f6fgeed471855",
        number: 1,
        roomClass: "Стандарт",
        numberOfGuests: 2,
        price: 35,
        available: true
    },
    {
        _id: "67rdca3eeb7f6fgeed471806",
        number: 2,
        roomClass: "Стандарт",
        numberOfGuests: 3,
        price: 45,
        available: true
    },
    {
        _id: "67rdca3eeb7f6fgeed471317",
        number: 3,
        roomClass: "Полулюкс",
        numberOfGuests: 2,
        price: 55,
        available: true
    },
    {
        _id: "67rdca3eeb7f6fgeed471018",
        number: 4,
        roomClass: "Полулюкс",
        numberOfGuests: 3,
        price: 65,
        available: true
    },
    {
        _id: "67rdca3eeb7f6fgeed471115",
        number: 5,
        roomClass: "Люкс",
        numberOfGuests: 2,
        price: 75,
        available: true
    },
    {
        _id: "67rdca3eeb7f6fgeed471080",
        number: 6,
        roomClass: "Люкс",
        numberOfGuests: 3,
        price: 85,
        available: true
    }
    // {
    //     _id: "67rdca3eeb7f6fgeed471821",
    //     number: 7
    // },
    // {
    //     _id: "67rdca3eeb7f6fgeed471822",
    //     number: 8,
    //     class: "standard",
    //     price: 45,
    //     booking: false,
    // },
    // {
    //     _id: "67rdca3eeb7f6fgeed471823",
    //     number: 9
    // },
    // {
    //     _id: "67rdca3eeb7f6fgeed471824",
    //     number: 10
    // },
    // {
    //     _id: "67rdca3eeb7f6fgeed47181f",
    //     number: 11,
    //     class: "standard",
    //     price: 45,
    //     booking: false,
    // },
    // {
    //     _id: "67rdca3eeb7f6fgeed47181r",
    //     number: 12
    // }
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
