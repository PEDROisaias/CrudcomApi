import { deleteColono } from "../servers/colonosCrud";

export default function CardColono({ item, navigation, refresh }) {

    return (
        <View style={styles.card}>
            <View>
                <Text style={styles.name}>
                    {item.firstName} {item.lastName}
                </Text>

                <Text style={styles.skill}>
                    {item.skill}
                </Text>
            </View>

            <View>
                <Button
                    title="Editar"
                    onPress={() => navigation.navigate("AddEdit", { person: item })}
                />

                <Button
                    title="Deletar"
                    onPress={async () => {
                        await deleteColono(item.id);
                        refresh();
                    }}
                />
            </View>
        </View>
    );
}