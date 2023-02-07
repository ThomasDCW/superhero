import { useEffect, useState } from 'react';
import axios from 'axios';
import SHeroGallery from './style';
import { Hero } from '../../interfaces';
import HeroCard from '../HeroCard';

export default function HeroGallery() {
  const [heroes, setHeroes] = useState<Hero[]>([]);

  useEffect(() => {
    const fetchHeroes = async () => {
      const response = await axios.get(
        'https://akabab.github.io/superhero-api/api/all.json'
      );
      setHeroes(response.data);
    };

    fetchHeroes();
  }, []);

  return (
    <SHeroGallery>
      {heroes
        .filter((hero) => {
          if (
            hero.biography.publisher === 'Marvel Comics' ||
            hero.biography.publisher === 'DC Comics' ||
            hero.biography.publisher === 'Shueisha'
          )
            return hero;
        })
        .map((hero, key) => {
          return (
            <HeroCard
              key={key}
              id={hero.id}
              name={hero.name}
              powerstats={{
                intelligence: hero.powerstats.intelligence,
                strength: hero.powerstats.strength,
                speed: hero.powerstats.speed,
                durability: hero.powerstats.durability,
                power: hero.powerstats.power,
                combat: hero.powerstats.combat,
              }}
              appearance={{
                gender: hero.appearance.gender,
                race: hero.appearance.race,
              }}
              biography={{
                fullName: hero.biography.fullName,
                publisher: hero.biography.publisher,
              }}
              images={hero.images}
            />
          );
        })}
    </SHeroGallery>
  );
}
