import React from 'react';
import PropTypes from 'prop-types';
import {Avatar} from 'antd';
import './circular-card-item.scss';

export const CircularCardItem = (props) => {
    const {itemTitle, itemSubtitle, imageURL, itemStyle, itemClickAction} = {...props};

    const itemClick = () => {
        itemClickAction(props);
    };

    return (
        <div className={'circular-card-item'} onClick={itemClick}>
            <Avatar
                size='large'
                src={imageURL}
                style={itemStyle}
            />
            <div className={'circular-card-item-title'}>{itemTitle}</div>
            <div className={'circular-card-item-subtitle'}>{itemSubtitle}</div>
        </div>
    );
};

CircularCardItem.propTypes = {
    itemId: PropTypes.string.isRequired,
    itemTitle: PropTypes.string.isRequired,
    itemSubtitle: PropTypes.string.isRequired,
    imageURL: PropTypes.string.isRequired,
    itemClickAction: PropTypes.func.isRequired,
    itemStyle: PropTypes.object.isRequired,
};

