import React from "react";

export const Home = () => {
  return (
    <div>
      <div id="random-fact">
        <h2>RANDOM ANIMAL INFO</h2>
        <br />
        <br />
        <img id="fact-image"
             src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/73/Lion_waiting_in_Namibia.jpg/1200px-Lion_waiting_in_Namibia.jpg"></img>
        <br />
        <br />
        <h2>LION</h2>
        <br />
        <br />
        <h3> A large, powerfully built cat that is second in sizeonly to the tiger; it is a famous apex
          predator. The proverbial “king of beasts,” the lion has been one of the best-known wild animals
          since earliest times. Lions are most active at night and live in a variety of habitats but prefer
          grassland, savanna, dense scrub, and open woodland. Historically, they ranged across much of
          Europe, Asia, and Africa, but now they are found mainly in parts of Africa south of the
          Sahara. An isolated population of about 650 Asiatic lions constitute a slightly smaller race
          that lives under strict protection in India's Gir National Park and Wildlife Sanctuary.
        </h3>
        <br />
        <h3>To see more information about animals, please visit the Animals Page</h3>
      </div>
      
      <div id="news">
        <h2>RECENT NEWS</h2>
        <br />
        <br />
        <img id="news-image"
             src="https://countryroadsmagazine.com/downloads/8424/download/Cayenne-dolphin.jpg?cb=c989d7ea0ab93d644ba38dfba575d5fe&w=1050&h="></img>
        <br />
        <br />
        <h3>A new study published in April 2024 reveals that, in 2022, a dolphin 
          died from bird flu in the United States. It marks the first  
          cetacean everr recorded to be infected with highly pathogenic avian influenza in North America. Scientists who authored the study now fear the spread of bird flu in cetaceans "could be catastrophic."</h3>
        <br />
        <a href="https://www.worldanimalprotection.us/latest/blogs/dolphin-in-florida-dies-from-bird-flu/">Click here for more information</a>
      </div>
    </div>
  );
};
