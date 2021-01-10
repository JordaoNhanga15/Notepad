import React,{useState} from 'react'
import {View, Text, StyleSheet, TextInput} from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import AntDesign from 'react-native-vector-icons/AntDesign'

function SignUpComponent({navigation}){
    const [BorderColor,setborderColor]=useState(null)
    function Onfocus(value){
        setborderColor(value)
    }
    return(
        <>
            <View style={styles.View}>
                <Text style={styles.title}>Sign Up</Text>
                <Text style={styles.text}>Login with Name, Sobrenome,Email and Password</Text>
                <View style={[styles.action,{
                    marginTop:20,
                    marginBottom:20
                }]}>
                    <View style={[styles.section,{
                        borderColor:BorderColor==="name"?'#3465d9':'gray',
                        marginBottom:5
                    }]}>
                        <AntDesign 
                            name="user" 
                            size={20}
                            color={BorderColor==="name"?'#3465d9':'gray'}
                        />
                        <TextInput 
                            placeholder="name"
                            style={styles.TextInput}
                            onFocus={()=>Onfocus("name")}
                        />
                    </View>
                    <View style={[styles.section,{
                        borderColor:BorderColor==="Sobrenome"?'#3465d9':'gray',
                        marginBottom:5
                    }]}>
                        <AntDesign 
                            name="user" 
                            size={20}
                            color={BorderColor==="Sobrenome"?'#3465d9':'gray'}
                        />
                        <TextInput 
                            placeholder="Sobrenome"
                            style={styles.TextInput}
                            onFocus={()=>Onfocus("Sobrenome")}
                        />
                    </View>
                    <View style={[styles.section,{
                        borderColor:BorderColor==="email"?'#3465d9':'gray',
                        marginBottom:5
                    }]}>
                        <MaterialIcons 
                            name="email" 
                            size={20}
                            color={BorderColor==="email"?'#3465d9':'gray'}
                        />
                        <TextInput 
                            placeholder="email"
                            style={styles.TextInput}
                            onFocus={()=>Onfocus("email")}
                        />
                    </View>
                    <View style={[styles.section,{
                        borderColor:BorderColor==="password"?'#3465d9':'gray'
                    }]}>
                        <MaterialIcons 
                            name="lock-outline" 
                            size={20}
                            color={BorderColor==="password"?'#3465d9':'gray'}
                        />
                        <TextInput 
                            placeholder="password"
                            style={styles.TextInput}
                            onFocus={()=>Onfocus("password")}
                            secureTextEntry
                        />
                    </View>

                </View>

                <TouchableOpacity style={styles.login}>
                    <Text style={styles.textLogin}>Sign Up</Text>
                </TouchableOpacity>
                {/* <View style={styles.signup}>
                    <Text style={[styles.textsignup,{
                        color:'gray'
                    }]}>Don't have an account?</Text>
                    <TouchableOpacity
                        onPress={()=>navigation.navigate('SignUpScreen')}
                    >
                        <Text style={[styles.textsignup,{
                            color:'#3465d9',
                            marginLeft:7
                        }]}>Sign Up</Text>
                    </TouchableOpacity>
                </View> */}
            </View>
        </>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#000',
      color:'white',
      alignItems: 'center',
      justifyContent: 'center',
    },
    View:{
        flex:1,
        backgroundColor: '#fff',
        justifyContent:'center',
        paddingHorizontal:30,
        paddingVertical:100
    },
    title:{
        color:'#3465d9',
        fontSize:30,
        fontWeight:'bold'
    },
    text:{
        color:'gray'
    },
    section:{
        flexDirection:'row',
        borderWidth:2,
        borderRadius:5,
        paddingHorizontal:15,
        paddingVertical:10,
        alignItems:'center',
        marginTop:10
    },
    TextInput:{
        flex:1,
        paddingLeft:10
    },
    forget:{
        textAlign:'right',
        marginTop:15,
        color:'#3465d9'
    },
    textLogin:{
        fontSize:15,
        fontWeight:'bold',
        color:'white'
    },
    login:{
        width:'100%',
        height:40,
        backgroundColor:'#3465d9',
        alignItems:'center',
        justifyContent:'center',
        marginTop:25,
        borderRadius:50
    },
    signup:{
        marginTop:25,
        flexDirection:'row',
        justifyContent:'center'
    },
    textsignup:{
        textAlign:'center'
    }
  });

export default SignUpComponent