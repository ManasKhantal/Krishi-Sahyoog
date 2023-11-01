import { View, Text } from 'react-native';
import { SafeAreaView } from "react-native-safe-area-context";
// import { useNavigation } from '@react-navigation/native';
import React, { useLayoutEffect } from 'react'
import HeadSection from './HeadSection';

const About = () => {
  return (
    <SafeAreaView>
      <HeadSection />
      <Text>About</Text>
    </SafeAreaView>
  )
}

export default About