// Filename: index.js
// Combined code from all files

import React from 'react';
import { SafeAreaView, StyleSheet, Text, FlatList, Image, View, TouchableOpacity, Alert } from 'react-native';

// ImageList.js
const images = [
    { id: '1', uri: 'https://picsum.photos/200/301', description: 'Drink water' },
    { id: '2', uri: 'https://picsum.photos/200/302', description: 'Eat food' },
    { id: '3', uri: 'https://picsum.photos/200/303', description: 'Go to bed' },
    { id: '4', uri: 'https://picsum.photos/200/304', description: 'Play outside' },
    { id: '5', uri: 'https://picsum.photos/200/305', description: 'Need help' },
];

const ImageList = () => {
    const showAlert = (description) => {
        Alert.alert('Selected Action', description, [{ text: 'OK', onPress: () => console.log('OK Pressed') }]);
    };

    const renderItem = ({ item }) => (
        <TouchableOpacity onPress={() => showAlert(item.description)}>
            <View style={styles.imageContainer}>
                <Image source={{ uri: item.uri }} style={styles.image} />
            </View>
        </TouchableOpacity>
    );

    return <FlatList data={images} renderItem={renderItem} keyExtractor={(item) => item.id} contentContainerStyle={styles.list} />;
};

const styles = StyleSheet.create({
    list: {
        alignItems: 'center',
    },
    imageContainer: {
        margin: 10,
    },
    image: {
        width: 200,
        height: 200,
        borderRadius: 10,
    },
    // App.js styles
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginVertical: 20,
    },
});

// App.js
export default function App() {
    return (
        <SafeAreaView style={styles.container}>
            <Text style={styles.title}>Communication through Images</Text>
            <ImageList />
        </SafeAreaView>
    );
}