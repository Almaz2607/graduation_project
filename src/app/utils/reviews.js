export const getReviewClass = (path) => {
    const initClass = "review-block";
    if (path === "") {
        return `food__review  ${initClass}`;
    } else if (path === "about") {
        return `reviews__item  ${initClass}`;
    } else if (path === "rooms") {
        return `room-reviews__item  ${initClass}`;
    }
};
