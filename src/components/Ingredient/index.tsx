import { Image, Pressable, PressableProps, Text } from "react-native";
import { styles } from "./style";

export type ingredientsProps = {
    name: string,
    image: string,
    selected?: boolean 
}

export function Ingredient({ name, image, selected = false, ...rest }: ingredientsProps &    PressableProps) {
    return (
        <Pressable style={[styles.container, selected && styles.selected]} {...rest}>
            <Image source={{ uri: image }} style={styles.image}/>
            <Text style={styles.title}>{name}</Text>
        </Pressable>
    )
}