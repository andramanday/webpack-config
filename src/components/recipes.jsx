import { useState } from 'react';

export const elevenShildRecipe = {
    leatherScripts: 1,
    ironIngot: 1,
    refinedMoonstone: 4,
    marko: 5
};

const elvenGautletsRecipe = {
    ...elevenShildRecipe,
    Leater: 1,
    refineOil: 4
}

const Recipes = () => {
    const [recipe, setRecipe] = useState({});
    return(
        <div>
            <h3>Curret Receipe:</h3>
            <button onClick={() => setRecipe(elevenShildRecipe)}>Eleven Shild Recipe</button>
            <button onClick={() => setRecipe(elvenGautletsRecipe)}>Eleven Gautlen Recipe</button>

            <ul>
                {Object.keys(recipe).map((material) => (
                    <li key={material}>
                        {material}: {recipe[material]}
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default Recipes;