import React from 'react';
import styles from './estilo';
import { Text, View, Image, TouchableOpacity, } from 'react-native';



export default class TelaInicial extends React.Component {
    render() {
        return (
            // float text input
            <View style={styles.container}>
                <View>
                    <Image style={styles.Logo}
                        source={require("./assets/epic.png")}>
                    </Image>

                    <View>
                        <Text style={styles.texto}>choose how to sign into your epic account</Text>
                    </View>

                </View>

                <View style={styles.container2}>
                    <View style={[styles.a, styles.epic]}>
                        <Image style={styles.Logo2}
                            source={require("./assets/epic1.png")}>
                        </Image>
                    </View>
                    <Text style={styles.texto1} onPress={() => this.props.navigation.navigate('Login')}>SIGN IN WITH EPIC GAMES</Text>

                </View>

                <View style={styles.container2}>
                    <View style={styles.a}>
                        <Image style={styles.Logo2}
                            source={require("./assets/face.png")}>
                        </Image>
                    </View>
                    <Text style={styles.texto1} onPress={() => this.props.navigation.navigate('Login')}>LOG IN WITH FACEBOOK</Text>

                </View>

                <View style={styles.container2}>
                    <View style={[styles.a, styles.google]}>
                        <Image style={styles.Logo2}
                            source={require("./assets/google-logo.png")}>
                        </Image>
                    </View>

                    <Text style={styles.texto1} onPress={() => this.props.navigation.navigate('Login')}>LOG IN WITH GOOGLE</Text>

                </View>


                <View style={styles.container2}>
                    <View style={[styles.a, styles.xbox]}>
                        <Image style={styles.Logo2}
                            source={require("./assets/xbox.png")}>
                        </Image>
                    </View>

                    <Text style={styles.texto1} onPress={() => this.props.navigation.navigate('Login')}>LOG IN WITH XBOX LIVE</Text>

                </View>

                <View style={styles.container2}>
                    <View style={[styles.a, styles.play]}>
                        <Image style={styles.Logo2}
                            source={require("./assets/play.png")}>
                        </Image>
                    </View>

                    <Text style={styles.texto1} onPress={() => this.props.navigation.navigate('Login')}>SIGN IN WITH A PLAYSTATION ACCOUNT</Text>

                </View>

                <View style={styles.container2}>
                    <View style={[styles.a, styles.nitendo]}>
                        <Image style={styles.Logo2}
                            source={require("./assets/nitendo.png")}>
                        </Image>
                    </View>

                    <Text style={styles.texto1} onPress={() => this.props.navigation.navigate('Login')}>SIGN IN WITH NITENDO</Text>

                </View>


                <View style={styles.container2}>
                    <View style={[styles.a, styles.steam]}>
                        <Image style={styles.Logo2}
                            source={require("./assets/steam.png")}>
                        </Image>
                    </View>

                    <Text style={styles.texto1} onPress={() => this.props.navigation.navigate('Login')}>SIGN IN WITH STEAM</Text>

                </View>

                <View style={styles.container2}>
                    <View style={[styles.a, styles.apple]}>
                        <Image style={styles.Logo2}
                            source={require("./assets/apple.png")}>
                        </Image>

                    </View>

                    <Text style={styles.texto1} onPress={() => this.props.navigation.navigate('Login')}>SIGN IN WITH APPLE </Text>

                </View>


                <View style={{flexDirection:"row",width:300, margin:10, marginLeft:40}}>
                   <Text style={styles.texto2}>Não tem uma conta Epic Games?   </Text> 

                <TouchableOpacity onPress={() => this.props.navigation.navigate('Cadastro')}>
                    <Text style={{  color: "white"}}>Cadastrar</Text>
                </TouchableOpacity>
                </View>
            </View>
        )
    }
}