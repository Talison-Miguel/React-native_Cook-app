import { Alert, FlatList, Image, Pressable, ScrollView, Text } from "react-native";
import { styles } from "./style";
import { Ingredient } from "../Ingredient";
import { useEffect, useState } from "react";
import { Selected } from "../Selected";
import { router } from "expo-router";
import { services } from "@/services";

export function Ingredients() {
    const [ selected, setSelected ] = useState<string[]>([])
    const [ingredients, setIngredients] = useState<IngredientResponse[]>([])

    function handleToggleSelected(value: string) {
        if(selected.includes(value)) {
            return setSelected((state) => state.filter(item => item !== value))
        }

        setSelected((state) => [...state, value])
        console.log(selected)
    }

    function handleClearSelected() {
        Alert.alert('Limpar', 'Deseja limpar tudo?', [
            {text: 'Não', style: 'cancel'},
            {text: 'Sim', onPress: () => setSelected([])}
        ])
    }

    function handleSearch() {
        router.navigate("/recipes/" + selected)
    }

    useEffect(() => {
        services.ingredients.findAll().then(setIngredients)
    },[])

    return (
        <>
            <ScrollView contentContainerStyle={styles.container} showsVerticalScrollIndicator={false}>
                {ingredients.map((item) => (
                    <Ingredient key={item.id} name={item.name} image={`${services.storage.imagePath}/${item.image}`} selected={selected.includes(item.id)} onPress={() => handleToggleSelected(item.id)}/>
                ))}
            </ScrollView>
            {selected.length > 0 && <Selected quantity={selected.length} onClear={handleClearSelected} onSearch={handleSearch}/>}
        </>    
    )
}