import React, { Component } from 'react'
import {StyleSheet, View, TextInput} from 'react-native'

// constants
import {DIMENSION, COLORS} from '../constants'

const UITextInput = props => {
    return (
        <View style={{
            width:DIMENSION.SCREEN_WIDTH - (DIMENSION.MARGIN * 2),
            marginBottom: DIMENSION.MARGIN/2
        }}>
           <TextInput
        style={styles.contianer}
        placeholder={props.placeholder}
        value={props.value}
        {...props}/> 
        </View>
        
    )
}

const styles = StyleSheet.create({
    contianer: {
        borderWidth:1,
        width:'100%',
        paddingVertical: DIMENSION.PADDING/2,
        paddingHorizontal: DIMENSION.PADDING/2,
        fontSize: 16
    }
})

export default UITextInput;