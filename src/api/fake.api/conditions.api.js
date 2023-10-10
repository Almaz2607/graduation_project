// export const professionsObject = {
//     doctor: { _id: "67rdca3eeb7f6fgeed471818", name: "Доктор" },
//     waiter: { _id: "67rdca3eeb7f6fgeed471820", name: "Официант" },
//     physics: { _id: "67rdca3eeb7f6fgeed471814", name: "Физик" },
//     engineer: { _id: "67rdca3eeb7f6fgeed471822", name: "Инженер" },
//     actor: { _id: "67rdca3eeb7f6fgeed471824", name: "Актер" },
//     cook: { _id: "67rdca3eeb7f6fgeed471829", name: "Повар" }
// };
// export const professions = [
//     { _id: "67rdca3eeb7f6fgeed471818", name: "Доктор" },
//     { _id: "67rdca3eeb7f6fgeed471820", name: "Официант" },
//     { _id: "67rdca3eeb7f6fgeed471814", name: "Физик" },
//     { _id: "67rdca3eeb7f6fgeed471822", name: "Инженер" },
//     { _id: "67rdca3eeb7f6fgeed471824", name: "Актер" },
//     { _id: "67rdca3eeb7f6fgeed471829", name: "Повар" }
// ];
export const conditions = [
    {
        _id: "67rdca3eeb7f6fgeed471818",
        text: ` Расположение комфортное, рядом магазины,
    транспорт, горы, озеро. Быть готовым к тому, что
    в номере тонкие стены и шумные соседи.`
    },
    {
        _id: "67rdca3eeb7f6fgeed471599",
        text: ` Расположение комфортное, рядом магазины,
    транспорт, горы, озеро. Быть готовым к тому, что
    в номере тонкие стены и шумные соседи.`
    },
    {
        _id: "67rdca3eeb7f6fgeed471035",
        text: ` Расположение комфортное, рядом магазины,
    транспорт, горы, озеро. Быть готовым к тому, что
    в номере тонкие стены и шумные соседи.`
    }
];
const fetchAll = () =>
    new Promise((resolve) => {
        window.setTimeout(function () {
            resolve(conditions);
        }, 2000);
    });

export default {
    fetchAll
};
