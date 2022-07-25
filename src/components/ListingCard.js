import React from "react";

function ListingCard({ listing, onFavorite }) {

  const {id, description, image, location, starred} = listing

  function handleStar(event) {
    onFavorite(event.target.parentNode.parentNode.id)
  }

  function handleDelete(event) {
    const listingID = parseInt(event.target.parentNode.parentNode.id)
    fetch(`http://localhost:6001/listings/${listingID}`, {
      method: "DELETE"
    })
    .then(response => response.json())
    .then(console.log("Deletion completed"))
  }

  return (
    <li className="card" id={id}>
      <div className="image">
        <span className="price">$0</span>
        <img src={image} alt={"description"} />
      </div>
      <div className="details">
        {starred ? (
          <button className="emoji-button favorite active" onClick={handleStar}>★</button>
        ) : (
          <button className="emoji-button favorite" onClick={handleStar}>☆</button>
        )}
        <strong>{description}</strong>
        <span> · {location}</span>
        <button className="emoji-button delete"
                onClick={handleDelete}>🗑</button>
      </div>
    </li>
  );
}

export default ListingCard;
