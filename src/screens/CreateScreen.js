import React, {useState, useRef} from "react";
import {
    View,
    Text,
    StyleSheet,
    Image,
    Button,
    TouchableWithoutFeedback,
    ScrollView,
    Keyboard
} from "react-native";
import {TextInput} from "react-native-paper";
import {THEME} from "../theme";
import {useDispatch} from "react-redux";
import {addPost} from "../store/actions/postAction";
import {PhotoPicker} from "../components/PhotoPicker";

export const CreateScreen = ({navigation}) => {
    const [text, setText] = useState("");
    const [imgUri, setImgUri] = useState(null);

    const dispatch = useDispatch();

    const getImgUri = uri => {
        setImgUri(uri);
    }

    const saveHandler = () => {
        const post = {
            text,
            booked: false,
            img: imgUri,
            date: new Date().toJSON()
        }

        dispatch(addPost(post));
        setText("");
        setImgUri(null);
        navigation.navigate("Main")
    }

    return (
        <ScrollView>
            <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
                <View style={styles.wrapper}>
                    <Text style={styles.title}>
                        {"Создай новый пост"}
                    </Text>

                    <TextInput
                        style={styles.textArea}
                        placeholder={"Введите текст поста"}
                        value={text}
                        onChangeText={setText}
                        multiline
                    />

                    <PhotoPicker getImgUri={getImgUri} imgUri={imgUri}/>

                    <Button
                        title={"Создать пост"}
                        color={THEME.MAIN_COLOR}
                        onPress={saveHandler}
                        disabled = {!text || !imgUri}
                    />
                </View>
            </TouchableWithoutFeedback>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    wrapper: {
       padding: 10
    },

    title: {
        fontSize: 20,
        textAlign: "center",
        fontFamily: "open-regular",
        marginVertical: 10
    },

    textArea: {
        padding: 10,
        marginBottom: 10
    }
});
