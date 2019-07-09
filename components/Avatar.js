import { ColorPropType, View, Text, StyleSheet } from 'react-native';
import React from 'react'
import PropTypes from 'prop-types'


export default function Avatar({size, backgroundColor, initials }) {
    const style ={
        width: size,
        height: size,
        borderRadius: size/2,
        backgroundColor,
    }
    return(

    <View style={style} />
    )
}

Avatar.propTypes ={
    initials: PropTypes.string.isRequired,
  size: PropTypes.number.isRequired,
  backgroundColor: ColorPropType.isRequired,
}