import React from "react";
import PropTypes from "prop-types";
import "/src/Components/HeroCard/HeroCard.css"; 

const HeroCard = ({ heroes }) => (
  <div className="hero-cards-container">
    {heroes.map((hero, index) => (
      <div key={`${hero.name}-${index}`} className="hero-card">
        <img src={hero.url} alt={hero.name} />
        <h2>{hero.name}</h2>
        <ul>
          <li>
            <strong>Вселенная:</strong> {hero.universe}
          </li>
          <li>
            <strong>Альтер-эго:</strong> {hero.alterego}
          </li>
          <li>
            <strong>Род деятельности:</strong> {hero.occupation}
          </li>
          <li>
            <strong>Друзья:</strong> {hero.friends}
          </li>
          <li>
            <strong>Сверхспособности:</strong> {hero.superpowers}
          </li>
        </ul>
        <p>{hero.info}</p>
      </div>
    ))}
  </div>
);

// Пропсы
HeroCard.propTypes = {
  heroes: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      universe: PropTypes.string.isRequired,
      alterego: PropTypes.string.isRequired,
      occupation: PropTypes.string.isRequired,
      friends: PropTypes.arrayOf(PropTypes.string).isRequired,
      superpowers: PropTypes.arrayOf(PropTypes.string).isRequired,
      url: PropTypes.string.isRequired,
      info: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default HeroCard;
