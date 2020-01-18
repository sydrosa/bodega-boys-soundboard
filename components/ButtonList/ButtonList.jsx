import React, { Component } from 'react';
import { Text, View } from 'react-native';
import Button from '../Button/Button'
import Sounds from '../Sounds'

export default class ButtonList extends Component {
    constructor(){
        super()
    }
    
handleAudio = (e) => {
    e.preventDefault();
    
}

    render(){
        return(
            <>
            {Sounds.map(sound => {
                return <Button sound={sound}/>
            })}
            
            </>
        )
    }
}