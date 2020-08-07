import React, {useState, useEffect} from "react";
import * as ImagePicker from 'expo-image-picker';
import {View, StyleSheet, Image, Button, Alert} from "react-native";
import * as Permissions from 'expo-permissions';

export const PhotoPicker = ({getImgUri, imgUri}) => {
    const [image, setImage] = useState(null);

    useEffect(() => setImage(imgUri), [imgUri])

    async function askForPermission() {
        const {status} = await Permissions.askAsync(
            Permissions.CAMERA,
            Permissions.CAMERA_ROLL
        );

        if (status !=="granted") {
            Alert.alert("Ошибка", "Нет прав на использование камеры!");
            return false;
        }

        return true;
    }

    const takePhoto = async() => {
        const hasPermissons = await askForPermission();

        if (!hasPermissons) {
            return;
        }

        const img = await ImagePicker.launchCameraAsync({
            quality: 0.7,
            allowsEditing: false,
            aspect: [16, 9],

        });

        setImage(img.uri);
        getImgUri(img.uri);

    }

    return (
        <View style={styles.wrapper}>
            <Button
                title={"Сделать фото"}
                onPress={takePhoto}
            />
            {image && <Image source={{uri: image}} style={styles.image}/>}
        </View>
    );
}

const styles = StyleSheet.create({
    wrapper: {
        marginBottom: 10,
    },

    image: {
        width: "100%",
        height: 200,
        marginTop: 10
    }
});
