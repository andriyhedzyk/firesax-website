import React from 'react'

// import brands data
import {brands} from '../components/data'

const Brands = () => {
  return (
    <section className="min-h-[136px] max-h-80 bg-tertiary flex items-center">
      <div
        className="container mx-auto
          flex md:justify-between items-center flex-wrap justify-evenly scale-75 md:scale-100 lg:scale-100">
        {brands.map((brand, index) => {
          return (
            <div className="" key={index}>
              <img src={brand.img} alt="" />
            </div>
          );
        })}
      </div>
    </section>
  );
}

export default Brands
