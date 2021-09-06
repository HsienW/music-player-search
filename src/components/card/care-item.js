import React from 'react';
import PropTypes from 'prop-types';
import {Card} from 'antd';
import './card-item.scss';

const {Meta} = Card;

export const CardItem = (props) => {
    const {itemTitle, itemHoverable, imageURL, itemStyle, itemClickAction, itemImageClass} = {...props};

    const itemClick = () => {
        itemClickAction(props);
    };

    return (
        <Card
            className={itemImageClass}
            hoverable={itemHoverable}
            onClick={itemClick}
            cover={<img src={imageURL}/>}
            style={itemStyle}
        >
            <Meta
                title={itemTitle}
            />
        </Card>
    );
};

CardItem.propTypes = {
    itemId: PropTypes.string.isRequired,
    itemTitle: PropTypes.string.isRequired,
    itemHoverable: PropTypes.bool.isRequired,
    itemSubtitle: PropTypes.string.isRequired,
    imageURL: PropTypes.string.isRequired,
    itemClickAction: PropTypes.func.isRequired,
    itemStyle: PropTypes.object.isRequired,
    itemImageClass: PropTypes.string.isRequired,
};

