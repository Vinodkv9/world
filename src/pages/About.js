// export const About = () => {
//   return;
//   <h1>About Page</h1>;
// };
import countryFacts from "../api/countryData.json"; 
import React from 'react'

const About = () => {
  return (
    <section className="section-about container">
      <h2 className="container-title">
        Here are the Interesting Facts
        <br />
        we are proud of
      </h2>
      <div className="gradient-cards">
        {countryFacts.map((country) => {
           const { id, countryName, capital, population, interestingFact } =
             country;
             return (
               <div className="card">
                 <div className="container-card bg-blue-box">
                   <p>
                     <span className="card-description">Capital:</span>
                     {capital}
                   </p>
                   <p>
                     <span className="card-description">Population:</span>
                     {population}
                   </p>
                   <p>
                     <span className="card-description">Interesting Fact:</span>
                     {interestingFact}
                   </p>
                 </div>
               </div>
             );
        })}
      </div>
    </section>
  );
}

export default About
