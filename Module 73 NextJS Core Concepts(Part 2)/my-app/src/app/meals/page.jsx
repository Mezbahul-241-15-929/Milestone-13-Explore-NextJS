import MealSearch from "./components/MealSearch";

const MealPage = async ({ searchParams }) => {
    const query = await searchParams;

    const fetchMeals = async () => {
        try {
            const res = await fetch(
                `https://www.themealdb.com/api/json/v1/1/search.php?s=${query.search}`,
                { cache: "no-store" }
            );
            const data = await res.json();
            return data?.meals || [];
        } catch (error) {
            console.log(error);
            return [];
        }
    };

    const meals = await fetchMeals();

    return (
        <div>
            <MealSearch />

            <div>
                {meals.map((meal) => (
                    <div key={meal.idMeal} className="border p-2">
                        <p>{meal.strMeal}</p>
                        <p>{meal.strInstructions}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default MealPage;
