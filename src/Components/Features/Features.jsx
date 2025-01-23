import React from "react";
import bannerImageTwo from "../../assets/sebastien-le-derout-wX_zbzIxclA-unsplash.jpg";

const Features = () => {
  return (
    <div>
      <h1 className="text-center  text-3xl font-bold my-8">This is the Features page</h1>
      <div
        className="h-[1000px] rounded-3xl flex flex-col items-center justify-center bg-cover bg-center relative"
        style={{
          backgroundImage: `url(${bannerImageTwo})`,
        }}
      >
        {/* Overlay for opacity */}
        <div className="absolute inset-0 bg-black bg-opacity-50 rounded-3xl"></div>
        
        {/* Content */}
        <div className="relative text-center bg-transparent ">
          <h1 className="text-6xl font-anton font-bold text-white">
            Why to read with us
          </h1>
          <p className="font-anton text-white w-[900px]  text-xl text-center mt-6">
            Reading opens the door to endless possibilities, and we are here to
            make your journey even more enriching. With a curated selection of
            books that cater to diverse interests and genres, we ensure there’s
            something for everyone. Whether you’re seeking knowledge, adventure,
            or an escape from the ordinary, our platform provides an immersive
            reading experience tailored to your preferences. Enjoy personalized
            recommendations, track your reading progress, and connect with a
            community of fellow book lovers. By reading with us, you’re not just
            picking up a book—you’re embarking on a transformative journey of
            growth, inspiration, and endless discovery.
          </p>
        </div>
      </div>
      <div>
        
      </div>
    </div>
  );
};

export default Features;
