import SHeroCard from './style';

interface HeroProps {
  id: number;
  name: string;
  powerstats: {
    intelligence: number;
    strength: number;
    speed: number;
    durability: number;
    power: number;
    combat: number;
  };
  appearance: {
    gender: string;
    race: string;
  };
  biography: {
    fullName: string;
    publisher: string;
  };

  images: {
    md: string;
  };
}

export default function HeroCard({
  id,
  name,
  powerstats,
  biography,
  images,
  appearance,
}: HeroProps) {
  return (
    <SHeroCard>
      <div className='card-container'>
        <div className='item'>
          <img className={`${biography.publisher}`} src={images.md} alt='' />
          <div className='infos'>
            <p>#{id}</p>
            <h2>{name}</h2>
            <p>{biography.publisher}</p>
            <p>{appearance.gender}</p>
            <p>{appearance.race}</p>
            <ul>
              <li>Combat : {powerstats.combat}</li>
              <li>Power : {powerstats.power}</li>
              <li>Intelligence : {powerstats.intelligence}</li>
              <li>Strength : {powerstats.strength}</li>
              <li>Speed : {powerstats.speed}</li>
              <li>Durability : {powerstats.durability}</li>
            </ul>
          </div>
        </div>
      </div>
    </SHeroCard>
  );
}
