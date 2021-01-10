import React,{useState} from 'react'
import {View, Text,StyleSheet,Image, Dimensions} from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler';
import Swiper from 'react-native-swiper';
import * as animatable from 'react-native-animatable'


function SwiperComponent({navigation}){
    const [animation_signup,setanimation_signup]=useState(null)
    const [animation_Log,setanimation_Log]=useState(null)
    const [Show,setShow]=useState(false)

    function IndexChange(e){
        e===2? alterarHooks(): repoeHooks()
        function alterarHooks(){
            setanimation_signup('bounceInLeft')
            setanimation_Log('bounceInRight')
            setShow(true)
        }
        function repoeHooks(){
            setanimation_signup(null)
            setanimation_Log(null)
            setShow(false)
        }
    }

    return(
        <>
            <Swiper
                loop={false}
                dot={<View style={styles.dot} />}
                activeDot={<View style={styles.ACtiveDot}/>}
                onIndexChanged={(index)=>IndexChange(index)}
            >
                <View style={styles.silde}>
                    <View style={styles.header}>
                        <Image 
                            source={require('../assets/asset1.png')}
                            style={styles.Image}
                            resizeMode="stretch"
                        />
                    </View>
                    <View style={styles.footer}>
                        <Text style={styles.title}>Cloud Storage</Text>
                        <Text style={styles.text}>Obrigado por assistir o meu video, chamo-me Jordao de Oliveira</Text>
                    </View>
                </View>

                <View style={styles.silde}>
                    <View style={styles.header}>
                        <Image 
                            source={require('../assets/asset2.png')}
                            style={styles.Image}
                            resizeMode="stretch"
                        />
                    </View>
                    <View style={styles.footer}>
                        <Text style={styles.title}>Share Storage</Text>
                        <Text style={styles.text}>Obrigado por assistir o meu video, chamo-me Jordao de Oliveira</Text>
                    </View>
                </View>

                <View style={styles.silde}>
                    <View style={styles.header}>
                        <Image 
                            source={require('../assets/asset3.png')}
                            style={styles.Image}
                            resizeMode="stretch"
                        />
                    </View>
                    <View style={styles.footer}>
                        <Text style={styles.title}>Save Storage</Text>
                        <Text style={styles.text}>Obrigado por assistir o meu video, chamo-me Jordao de Oliveira</Text>
                        {
                            Show ===true ?
                            <View style={{flexDirection:"row"}}>
                            <animatable.View
                                animation={animation_signup}
                                delay={0}
                                duration={1000}
                                useNativeDriver
                            >
                                <TouchableOpacity
                                    style={[styles.button,{
                                        borderColor:"#3465d9",
                                        borderRadius:50,
                                        borderWidth:1,
                                        marginTop:15,
                                    }]}
                                    onPress={()=>console.log(navigation.navigate('SignUpScreen'))}
                                >
                                    <Text style={{color:'#3465d9'}}>Sign Up</Text>
                                </TouchableOpacity>
                            </animatable.View>
                            <animatable.View
                                animation={animation_Log}
                                delay={0}
                                duration={1000}
                                useNativeDriver
                            >
                                <TouchableOpacity
                                    style={[styles.button,{
                                        backgroundColor:"#3465d9",
                                        borderRadius:50,
                                        marginTop:15,
                                        marginLeft:20
                                    }]}
                                    onPress={()=>console.log(navigation.navigate('LoginScreen'))}
                                >
                                    <Text style={{color:'#fff'}}>Login</Text>
                                </TouchableOpacity>
                            </animatable.View>
                        </View>
                            :
                            null                             
                        }
                        
                    </View>
                </View>
            </Swiper>
        </>
    )
}

const {width,height}=Dimensions.get("screen")
const height_image=height * 0.5 * 0.8;
const width_image=height_image * 1.1;
const width_button=width * 0.3;
const styles = StyleSheet.create({
    silde:{
        flex:1,
        backgroundColor:'white'
    },
    header:{
        flex:2,
        alignItems:'center',
        justifyContent:'center'
    },
    footer:{
        flex:1,
        alignItems:'center',
        paddingHorizontal:20
    },
    Image:{
        width:width_image,
        height:height_image
    },
    title:{
        fontSize:25,
        fontWeight:'bold',
        color:"#3465d9",
        textAlign:'center'
    },
    text:{
        color:"gray",
        textAlign:'center',
        marginTop:20
    },
    dot:{
        backgroundColor:'rgba(52,101,217,.4)',
        width:8,
        height:8,
        borderRadius:50,
        marginHorizontal:4,
        marginVertical:3
    },
    ACtiveDot:{
        backgroundColor:"#3465d9",
        width:20,
        height:8,
        borderRadius:4,
        marginHorizontal:5,
        marginVertical:4
    },
    button:{
        width:width_button,
        height:40,
        alignItems:'center',
        justifyContent:'center',
    }
  });

export default SwiperComponent