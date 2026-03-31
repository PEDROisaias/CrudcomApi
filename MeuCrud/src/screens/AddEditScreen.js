import React, { useState } from "react";
import { View, TextInput, Button } from "react-native";
import { createcolono, updatecolono } from "../servers/colonosCrud";
import styles from "../styles/styles";

export default function AddEditScreen({ route, navigation }) {
    
    const colono = route.params?.colono;

    const [firstName, setFirstName] = useState(colono?.firstName || "");
    const [lastName, setLastName] = useState(colono?.lastName || "");
    const [skill, setSkill] = useState(colono?.skill || "");

    async function save() {
        
        const data = { firstName, lastName, skill };

        if (colono) {
            
            await updatecolono(colono.id, data);
        }
        else {
            await createcolono(data);
        }

        navigation.goBack();
    }

    return (
        <View style={styles.container}>

            <TextInput
            placeholder="First Name"
            value={firstName}
            onChangeText={setFirstName}
            />

            <TextInput
            placeholder="Last Name"
            value={lastName}
            onChangeText={setLastName}
            />

            <TextInput
            placeholder="Skill"
            value={skill}
            onChangeText={setSkill}
            />

            <Button
            title="Salvar"
            onPress={save}
            />

            <Button
            title="Cancelar"
            onPress={() => navigation.goBack()}
            />
        </View>
    );
}