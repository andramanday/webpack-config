import './styles/index.scss';

const elevenShildRecipe = {
    leatherScripts: 1,
    ironIngot: 1,
    refinedMoonstone: 4,
    marko: 5
}

const neseRecipe = {
    ...elevenShildRecipe,
    kompor: 2,
    sendok: 3
}

const test = {
    nama: "budi"
}

console.log(elevenShildRecipe);
console.log(neseRecipe);