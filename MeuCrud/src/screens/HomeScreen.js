import React, { useEffect, useState } from "react";
import { View, Text, FlatList, Button } from "react-native";
import { getColonos } from "../servers/colonosCrud";
import styles from "../styles/styles";

export default function HomeScreen({ navigation }) {

    const [colonos, setColonos] = useState([]);

    async function loadColonos() {
        const data = await getColonos();
        setColonos(data);
    }

    useEffect(() => {
        loadColonos();
    }, []);

    return (

        <View style={styles.container}>

            <Text style={styles.title}> Gerenciar Colonia </Text>
            <Button
                title="Adicionar Colono"
                onPress={() => navigation.navigate("AddEdit")}
            />

            <FlatList
                data={colonos}
                keyExtractor={(item) => item.id.toString()}
                renderItem={({ item }) => (
                    <CardColono
                        item={item}
                        navigation={navigation}
                        refresh={loadColonos}
                    />
                )}
            />

        </View>
    );
}