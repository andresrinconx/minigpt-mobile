import { View, Text, Image, ScrollView } from 'react-native'
import React from 'react'

const Features = () => {
  return (
    <ScrollView className='space-y-4' showsVerticalScrollIndicator={false}>
      <Text className='font-semibold text-gray-700 text-2xl mt-4'>Características</Text>
      <View className='bg-emerald-200 p-4 rounded-xl space-y-2'>
        <View className='flex-row items-center space-x-1'>
          <Image source={require('../assets/images/chatgptIcon.png')} className='w-10 h-10' />
          <Text className='font-semibold text-gray-700 text-base'>ChatGPT</Text>
        </View>
        <Text className='text-gray-700 font-medium'>
          ChatGPT es un modelo de lenguaje que puede responder preguntas, proporcionar explicaciones y mantener conversaciones escritas con los usuarios.
        </Text>
      </View>

      <View className='bg-purple-200 p-4 rounded-xl space-y-2'>
        <View className='flex-row items-center space-x-1'>
          <Image source={require('../assets/images/dalleIcon.png')} className='w-10 h-10' />
          <Text className='font-semibold text-gray-700 text-base'>DALL-E</Text>
        </View>
        <Text className='text-gray-700 font-medium'>
          DALL-E es un modelo de inteligencia artificial desarrollado por OpenAI que se centra en la generación de imágenes a partir de descripciones de texto.
        </Text>
      </View>

      <View className='bg-cyan-200 p-4 rounded-xl space-y-2'>
        <View className='flex-row items-center space-x-1'>
          <Image source={require('../assets/images/smartaiIcon.png')} className='w-10 h-10' />
          <Text className='font-semibold text-gray-700 text-base'>Smart AI</Text>
        </View>
        <Text className='text-gray-700 font-medium'>
          Un asistente de voz con las habilidades y capacidades que tienen ChatGPT y DALL-E. Provee una mejor experiencia, ofreciendo generacion de texto e imagenes.
        </Text>
      </View>
    </ScrollView>
  )
}

export default Features