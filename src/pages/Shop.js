import React, { useEffect, useState } from "react";
import Breadcrumb from "../components/shared/Breadcrumb";
import PortraitList from "../components/Portrait/PortraitList";

const Shop = ({ photos }) => {
  // const [photos, setPhotos] = useState([]);
  // useEffect(() => {
  //   fetch("https://api.unsplash.com/photos/random?count=4", {
  //     headers: {
  //       Authorization: "Client-ID 0U7x-OwL9LoP1J88idf1vH1l4TnVIX222r-AOGYOl8o",
  //     },
  //   })
  //     .then((res) => res.json())
  //     .then((data) => setPhotos(data));
  // }, []);

  console.log(photos);
  return (
    <div className="portraits">
      <Breadcrumb link="portraits" />
      <h1>Portraits</h1>
      <PortraitList photos={photos} />
    </div>
  );
};

export default Shop;
