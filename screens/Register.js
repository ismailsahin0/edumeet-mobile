import React, { useState } from "react";
import axios from "axios";
import { Text, View, StyleSheet, TouchableOpacity, ScrollView } from "react-native";
import { emailValidator } from '../helpers/emailValidator'
import { passwordValidator } from '../helpers/passwordValidator'
import { nameValidator } from '../helpers/nameValidator'
import { surnameValidator } from '../helpers/surnameValidator';
import { universityValidator } from '../helpers/universityValidator';
import { ageValidator } from '../helpers/ageValidator';
import { genderValidator } from '../helpers/genderValidator';
import { Background, BackButton, Logo, Header, TextInput, Button } from "../components";
import { ERROR, PRIMARY_COLOR, SECONDARY_COLOR, WHITE } from "../assets/styles";


const Register = ({ navigation }) => {
    const [name, setName] = useState({ value: '', error: '' })
    const [surname, setSurname] = useState({ value: '', error: '' })
    const [email, setEmail] = useState({ value: '', error: '' })
    const [password, setPassword] = useState({ value: '', error: '' })
    const [university, setUniversity] = useState({ value: '', error: '' })
    const [age, setAge] = useState({ value: '', error: '' })
    const [gender, setGender] = useState({ value: '', error: '' })

    const onSignUpPressed = () => {
        const nameError = nameValidator(name.value)
        const surnameError = surnameValidator(surname.value)
        const emailError = emailValidator(email.value)
        const passwordError = passwordValidator(password.value)
        const universityError = universityValidator(university.value)
        const ageError = ageValidator(age.value)
        const genderError = genderValidator(gender.value)

        if (emailError || passwordError || nameError || surnameError || universityError || ageError || genderError) {
            setName({ ...name, error: nameError })
            setEmail({ ...email, error: emailError })
            setPassword({ ...password, error: passwordError })
            setSurname({ ...surname, error: surnameError })
            setUniversity({ ...university, error: universityError })
            setAge({ ...age, error: ageError })
            setGender({ ...gender, error: genderError })
            return
        }
        const url = "http://10.0.2.2:3001/register";
        const data =
        {
            "email": email.value,
            "password": password.value,
            "name": name.value,
            "surname": surname.value,
            "university": university.value,
            "age": age.value,
            "gender": gender.value
        }
        const config =
        {
            headers: {
                Authorization: "Edumeet edumeet"
            }
        }
        axios.post(url, data, config)
            .then((res) => {
                if (res.data.status === "error") {
                    throw res.data.message;
                }
                console.log("RESPONSE RECEIVED: ", res);
                alert('You are registered, you can login after verify your email...');
                // navigation.reset({
                //     index: 0,
                //     routes: [{ name: 'Login' }],
                // })
            })
            .catch((err) => {
                console.log("AXIOS ERROR: ", err);
                alert(err);
            })

    }
    return (
        <ScrollView
            vertical={true}
            showsVerticalScrollIndicator={false}
        >
            <Background>
                <BackButton goBack={navigation.goBack} />
                <Logo />
                <Header>Create Account</Header>
                <TextInput
                    label="Name"
                    returnKeyType="next"
                    value={name.value}
                    onChangeText={(text) => setName({ value: text, error: '' })}
                    error={!!name.error}
                    errorText={name.error}
                    maxLength={15}
                />
                <TextInput
                    label="Surname"
                    returnKeyType="next"
                    value={surname.value}
                    onChangeText={(text) => setSurname({ value: text, error: '' })}
                    error={!!surname.error}
                    errorText={surname.error}
                    maxLength={15}
                />
                <TextInput
                    label="Email"
                    returnKeyType="next"
                    value={email.value}
                    onChangeText={(text) => setEmail({ value: text, error: '' })}
                    error={!!email.error}
                    errorText={email.error}
                    autoCapitalize="none"
                    autoCompleteType="email"
                    textContentType="emailAddress"
                    keyboardType="email-address"
                    maxLength={15}
                />
                <TextInput
                    label="Password"
                    returnKeyType="done"
                    value={password.value}
                    onChangeText={(text) => setPassword({ value: text, error: '' })}
                    error={!!password.error}
                    errorText={password.error}
                    secureTextEntry
                    maxLength={15}
                />
                <TextInput
                    label="University"
                    returnKeyType="next"
                    value={university.value}
                    onChangeText={(text) => setUniversity({ value: text, error: '' })}
                    error={!!university.error}
                    errorText={university.error}
                />
                <TextInput
                    label="Age"
                    returnKeyType="next"
                    value={age.value}
                    onChangeText={(text) => setAge({ value: text, error: '' })}
                    error={!!age.error}
                    errorText={age.error}
                    keyboardType='numeric'
                    maxLength={2}  //setting limit of input
                />
                <TextInput
                    label="Gender"
                    returnKeyType="next"
                    value={gender.value}
                    onChangeText={(text) => setGender({ value: text, error: '' })}
                    error={!!gender.error}
                    errorText={gender.error}
                />
                <Button
                    mode="contained"
                    onPress={onSignUpPressed}
                    style={{ marginTop: 24 }}
                >
                    Sign Up
                </Button>
                <View style={styles.row}>
                    <Text>Already have an account?</Text>
                    <TouchableOpacity onPress={() => navigation.replace('Login')}>
                        <Text style={styles.link}>Login</Text>
                    </TouchableOpacity>
                </View>
            </Background>
        </ScrollView>
    )
};

const styles = StyleSheet.create({
    row: {
        flexDirection: 'row',
        marginTop: 4,
    },
    link: {
        fontWeight: 'bold',
        color: PRIMARY_COLOR,
    },
})

export default Register;
