import React from "react";
import PropTypes from "prop-types";

const ImageBlock = ({ name, path, alt, title, text, price }) => {
    return (
        <div className={`${name} item-block`}>
            <div className="item-block__image">
                <img src={`img/${path}.jpg`} alt={alt} />
                <div className="item-block__info info-block">
                    <p className="info-block__title">{title}</p>
                    <p className="info-block__text">{text}</p>
                </div>
                {price && (
                    <div className="item-block__price price-block">
                        <p className="price-block__value">$ {price}</p>
                    </div>
                )}
            </div>
        </div>
    );
};

ImageBlock.propTypes = {
    name: PropTypes.string,
    path: PropTypes.string,
    alt: PropTypes.string,
    title: PropTypes.string,
    text: PropTypes.string,
    price: PropTypes.string
};

export default ImageBlock;
