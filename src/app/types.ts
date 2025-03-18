interface RecipesProps {
    id: string, // não referenciar no f-e
    name: string,
    ingredients: IngredientsProps[]
}

type IngredientsProps = {
    name: string,
    quantity: number,
    type: 'lb' | 'g' | 'kg' | 'oz'
}