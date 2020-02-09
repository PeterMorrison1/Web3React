import React from 'react';
const FavouriteItem = function (props) {
    const imgURL = `https://www.randyconnolly.com/funwebdev/3rd/images/travel/medium640/`;
    return (
        <div>
            <img className="favoriteItem" src={imgURL + props.photo.filename.toLowerCase()} alt={props.photo.title} />
        </div>
    );
}
export default FavouriteItem;