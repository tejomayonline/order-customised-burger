const INGREDIENT_TYPE = {
    'bread-top': 'bread-top',
    'bread-bottom': 'bread-bottom',
    'meat': 'meat',
    'bacon': 'bacon',
    'cheese': 'cheese',
    'salad': 'salad'
}

const BUILD_CONTROL = [
    { label: 'Salad', type: INGREDIENT_TYPE.salad },
    { label: 'Meat', type: INGREDIENT_TYPE.meat },
    { label: 'Bacon', type: INGREDIENT_TYPE.bacon },
    { label: 'Cheese', type: INGREDIENT_TYPE.cheese },
]

const INGREDIENT_PRICE = {
    [INGREDIENT_TYPE.salad]: 0.5,
    [INGREDIENT_TYPE.cheese]: 0.4,
    [INGREDIENT_TYPE.meat]: 1.3,
    [INGREDIENT_TYPE.bacon]: 0.7,
}

export { INGREDIENT_TYPE, BUILD_CONTROL, INGREDIENT_PRICE };
