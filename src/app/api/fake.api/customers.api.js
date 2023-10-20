const customers = [
    {
        _id: "67rcomment7f6fgeed425797",
        firstName: "Андрей",
        surname: "Пархоменко",
        email: "grip6R@mail.ru",
        password: ""
    },
    {
        _id: "67rcomment7f6fgeed425097",
        firstName: "Виталий",
        surname: "Ловчев",
        email: "pRime2@mail.ru",
        password: ""
    },
    {
        _id: "67rcomment7f6fgeed422547",
        firstName: "Марина",
        surname: "Чиркина",
        email: "le22R@mail.ru",
        password: ""
    },
    {
        _id: "67rcomment7f6fgeed400797",
        firstName: "Ирина",
        surname: "Костина",
        email: "m77GfR@mail.ru",
        password: ""
    },
    {
        _id: "67rcomment7f6fgeed429195",
        firstName: "Николай",
        surname: "Зайцев",
        email: "Gro55Mil@mail.ru",
        password: ""
    },
    {
        _id: "67rcomment7f6fgeed418050",
        firstName: "Наталья",
        surname: "Ковнацкая",
        email: "Mali90cpR@mail.ru",
        password: ""
    }
];

const fetchAll = () =>
    new Promise((resolve) => {
        window.setTimeout(function () {
            resolve(customers);
        }, 2000);
    });

export default {
    fetchAll
};
