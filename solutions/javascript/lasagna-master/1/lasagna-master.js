/// <reference path="./global.d.ts" />
// @ts-check

export function cookingStatus(remainingTime){
  if (remainingTime === 0){
    return "Lasagna is done.";
  } else if (remainingTime > 0){
    return "Not done, please wait.";
  }

  return "You forgot to set the timer.";
}

export function preparationTime(layers, averagePrepTime){
  if (averagePrepTime){
    return layers.length * averagePrepTime;
  }

  return layers.length * 2;
}

export function quantities(layers){
  let noodles = 0;
  let sauce = 0;

  for(let layer of layers){
    if (layer === 'noodles'){
      noodles += 50;
    } else if (layer === 'sauce'){
      sauce += 0.2;
    }
  }

  return {
    noodles: noodles,
    sauce: sauce
  };
}

export function addSecretIngredient(arr1,arr2){
  arr2.push(arr1[arr1.length-1]);
}

export function scaleRecipe(recipe,amount){
  const neededAmount = amount / 2;
  const newRecipe = {}

  for (let ingredient in recipe){
    newRecipe[ingredient] = recipe[ingredient]  * neededAmount;
  }

  return newRecipe;
}
