import { Button, Text, View } from "react-native";

import React from "react";
import { styles } from "./styles";

const Product = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Product</Text>
            <Button 
                title="Go to Products"
                onPress={() => navigation.navigate("Products")}
            />
        </View>
    )
};

export default Categories;