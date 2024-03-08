import { ScrollView } from "react-native"
  
import { services } from "@/services"

import { styles } from "./styles"
import { Ingredient, ingredientsProps } from "@/components/Ingredient"

type Props = {
  ingredients: ingredientsProps[]
}

export function IngredientsSelecteds({ ingredients }: Props) {
  return (
    <ScrollView
      horizontal
      style={styles.container}
      contentContainerStyle={styles.ingredientsContent}
      showsHorizontalScrollIndicator={false}
    >
      {ingredients.map((ingredient) => (
        <Ingredient
          key={ingredient.name}
          name={ingredient.name}
          image={`${services.storage.imagePath}/${ingredient.image}`}
        />
      ))}
    </ScrollView>
  )
}
