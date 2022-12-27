

import { useState, useEffect } from 'react';
import Card from '../UI/Card';
import classes from './AvailableMeals.module.css';
import MealItem from './MealItem/MealItem';

const DATABASE_URL = 'https://react-food-order-d2497-default-rtdb.europe-west1.firebasedatabase.app/meals.json';

const AvailableMeals = () => {
  const [meals, setMeals] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState();

  useEffect(() => {
    const fetchMeals = async () => {
      const resp = await fetch(DATABASE_URL);

      if (!resp.ok) {
        throw new Error('Some error occured!');
      }

      const respData = await resp.json();

      const loadedMeals = [];

      for (const key in respData) {
        loadedMeals.push({
          id: key,
          name: respData[key].name,
          description: respData[key].description,
          price: respData[key].price,
        })
      }

      setMeals(loadedMeals);
      setIsLoading(false);
      setError(undefined);
    }

    fetchMeals().catch(error => {
      setIsLoading(false);
      setError(error);
    });

  }, [])

  if (isLoading) {
    return (
      <section className={classes.MealsLoading}>
        <p>Loading...</p>
      </section>
    )
  }

  if (error) {
    return (
      <section className={classes.MealsError}>
        <h3>{error.message}</h3>
      </section>
    )
  }

  const mealsList = meals.map(meal => (
    <MealItem
      id={meal.id}
      key={meal.id}
      name={meal.name}
      description={meal.description}
      price={meal.price}
    />
  ));

  return (
    <section className={classes.meals}>
      <ul>
        <Card>
          {mealsList}
        </Card>
      </ul>
    </section>
  )
}

export default AvailableMeals;