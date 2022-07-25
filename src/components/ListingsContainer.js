import React, {useEffect, useState} from "react";
import ListingCard from "./ListingCard";

function ListingsContainer({ searchTerm }) {
  const [listings, setListings] = useState([])

  useEffect(()=> {
    fetch("http://localhost:6001/listings")
    .then(response => response.json())
    .then(listingsData => {
      const dataWithStarToggle = listingsData.map(listing => {return {...listing, starred: false}})
      setListings(dataWithStarToggle)})
  },[])

  function handleFavorite(listingID) {
    const updatedListings = listings.map(listing => {
      if (listing.id === parseInt(listingID)) {
        return {...listing, starred:!listing.starred}
      } else {
        return listing; 
      }
    })
    setListings(updatedListings)
  }

  function handleDelete(listingID) {
    const updatedListings = listings.filter(listing => {
      return listing.id !== listingID
    })
    setListings(updatedListings); 
  }

  const displayListings = listings
  .filter(listing => listing.description.includes(searchTerm))
  .map(listing => {
    console.log("updating display")
    return <ListingCard key={listing.id} listing={listing} onFavorite={handleFavorite} onDelete={handleDelete}/>
  })

  return (
    <main>
      <ul className="cards">
        {displayListings}
      </ul>
    </main>
  );
}

export default ListingsContainer;
