import { View, Text, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import {useNavigation} from '@react-navigation/native'

const Welcome = () => {
  const navigation = useNavigation()

  return (
    <SafeAreaView className='flex-1 flex justify-around bg-white'>
      <View className='space-y-2'>
        <Text className='text-center text-4xl font-bold text-gray-700'>MiniGPT</Text>
      </View>
      <View className='flex-row justify-center'>
        <Image source={require('../assets/images/welcome.png')} className='w-72 h-72' />
      </View>
      <TouchableOpacity onPress={() => navigation.navigate('Home')} className='bg-emerald-600 mx-5 p-4 rounded-2xl'>
        <Text className='text-center text-white font-bold text-2xl'>Empezar</Text>
      </TouchableOpacity>
    </SafeAreaView>
  )
}

export default Welcome