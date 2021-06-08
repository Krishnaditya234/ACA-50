import React, { useState } from 'react';
import { StyleSheet, Text, SafeAreaView, TextInput, ScrollView } from 'react-native';

import ORDivider from "./ORDivider";
import BasicButton from "./BasicButton";

export default function Login({navigation}) {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [log, setLog] = useState("");

    //function to handle when login btn is clicked on
    function handleLoginBtnClick() {
        console.log("login clicked", email, password);

    }

    //function to handle when google login btn is clicked on
    function handleGoogleLoginBtnClick() {
        console.log("google login clicked");
    }

    //function to handle when signup btn is clicked on
    function handleSignUpBtnClick() {
        console.log("signup clicked");
    }

    //component rendering
    return (
        <ScrollView style={styles.container}>
            <SafeAreaView>
                <Text style={styles.title}>Login Form</Text>
            </SafeAreaView>
            <SafeAreaView style={styles.form}>
                <Text style={styles.label}>Email Address</Text>
                <TextInput
                    style={styles.inputField}
                    keyboardType="email-address"
                    placeholder="Enter your registered email"
                    value={email}
                    onChangeText={(val) => setEmail(val)}
                />

                <SafeAreaView style={styles.divider}></SafeAreaView>

                <Text style={styles.label}>Password</Text>
                <TextInput
                    style={styles.inputField}
                    secureTextEntry
                    placeholder="Enter password"
                    value={password}
                    onChangeText={(val) => setPassword(val)}
                />
            </SafeAreaView>

            <BasicButton
                text="Login"
                onPress={handleLoginBtnClick}
            />

          <ORDivider />
                    
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        marginTop: 1,
        padding: 1,
        paddingHorizontal: 30,
    },

    title: {
        fontWeight: '500',
        fontSize: 20,
        letterSpacing: 0.1,
        color: '#2E2E2E',
    },

    form: {
        marginVertical: 35,
    },

    label: {
        fontSize: 16,
        lineHeight: 18,
        color: '#666666',
        marginBottom: 3,
    },

    inputField: {
        fontSize: 14,
        borderBottomWidth: 1,
        borderBottomColor: '#BFBFBF',
        paddingVertical: 6,
    },

    divider: {
        paddingVertical: 8,
    },

    log: {
        textAlign: "center",
        marginVertical: 2,
    },

    signup: {
        marginTop: 40,
    }
});
