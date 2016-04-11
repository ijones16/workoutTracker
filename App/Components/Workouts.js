import React, { ScrollView, Text, StyleSheet } from 'react-native';

class Workouts extends React.Component{
    render(){
        return(
            <ScrollView style={styles.container}>
                <Text>Hello from Workouts</Text>
            </ScrollView>
        );
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column'
    }});

export default Workouts;