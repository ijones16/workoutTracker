import React, { ScrollView, Text, StyleSheet, TouchableHighlight } from 'react-native';
import Workouts from './Workouts';
import Lifts from './Lifts';

class Main extends React.Component{
    goToWorkouts(){
        this.props.navigator.push({
            component: Workouts,
            title: 'Workouts'
            //passProps: {}
        })
    }
    goToLifts(){
       this.props.navigator.push({
           component: Lifts,
           title: 'Lifts'
       })
    }
    render(){
        return(
            <ScrollView style={styles.container}>
                <TouchableHighlight
                    style={styles.button}
                    onPress={this.goToWorkouts.bind(this)}
                    underlayColor="#EEE">
                    <Text style={styles.buttonText}>View Workouts</Text>
                </TouchableHighlight>
                <TouchableHighlight
                    style={styles.button}
                    onPress={this.goToLifts.bind(this)}
                    underlayColor="#EEE">
                    <Text style={styles.buttonText}>View Lifts</Text>
                </TouchableHighlight>
            </ScrollView>
        );
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column'
    },
    button: {
        flexDirection: 'row',
        alignSelf: 'stretch',
        justifyContent: 'center',
        flex: 1,
        backgroundColor: '#D3D3D3',
        height: 100
    },
    buttonText: {
        fontSize: 24,
        color: 'black',
        alignSelf: 'center'
    }
});

export default Main;