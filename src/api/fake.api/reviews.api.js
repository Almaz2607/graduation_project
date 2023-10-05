const reviews = [
    {
        _id: "67rdca3eeb7f6fgeed471889",
        name: "Андрей",
        surname: "Пархоменко",
        photo: "",
        arrivalDate: "",
        departureDate: "",
        creationDate: "15.07.2023",
        text: " Расположение комфортное, рядом магазины,транспорт, горы, озеро. Быть готовым к тому,что в номере тонкие стены и шумные соседи.Для медитаций и уединения номер не подойдет. Дружелюбное и внимательное отношение."
    },
    {
        _id: "67rdca3eeb7f6fgeed471501",
        name: "Виталий",
        surname: "Ловчев",
        photo: "",
        arrivalDate: "",
        departureDate: "",
        creationDate: "02.07.2023",
        text: " Расположение комфортное, рядом магазины,транспорт, горы, озеро. Быть готовым к тому,что в номере тонкие стены и шумные соседи."
    },
    {
        _id: "67rdca3eeb7f6fgeed471930",
        name: "Марина",
        surname: "Чиркина",
        photo: "",
        arrivalDate: "",
        departureDate: "",
        creationDate: "25.06.2023",
        text: " Расположение комфортное, рядом магазины,транспорт, горы, озеро."
    },
    {
        _id: "67rdca3eeb7f6fgeed471403",
        name: "Ирина",
        surname: "Костина",
        photo: "",
        arrivalDate: "",
        departureDate: "",
        creationDate: "22.05.2023",
        text: "Все было хорошо, просто замечательно!. Расположение комфортное, рядом магазины,транспорт, горы, озеро. Дружелюбное и внимательное отношение."
    },
    {
        _id: "67rdca3eeb7f6fgeed471661",
        name: "Николай",
        surname: "Зайцев",
        photo: "",
        arrivalDate: "",
        departureDate: "",
        creationDate: "21.04.2023",
        text: "Быть готовым к тому,что в номере тонкие стены и шумные соседи.Для медитаций и уединения номер не подойдет. Дружелюбное и внимательное отношение."
    },
    {
        _id: "67rdca3eeb7f6fgeed471078",
        name: "Наталья",
        surname: "Ковнацкая",
        photo: "",
        arrivalDate: "",
        departureDate: "",
        creationDate: "05.03.2023",
        text: " Расположение комфортное, рядом магазины,транспорт, горы, озеро. Все было хорошо, просто замечательно!."
    }
];
const fetchAll = () =>
    new Promise((resolve) => {
        window.setTimeout(function () {
            resolve(reviews);
        }, 2000);
    });

export default {
    fetchAll
};
