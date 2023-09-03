import { View, Text, Image, ScrollView, TouchableOpacity, TextInput } from 'react-native'
import React, {useRef, useState} from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import {PaperAirplaneIcon, TrashIcon} from 'react-native-heroicons/solid'

import Features from '../components/Features'
import { dummyMessages } from '../constants'
import { apiCall } from '../api/openAI'

const Home = () => {
  const [messages, setMessages] = useState([])
  const [result, setResult] = useState('')
  const ScrollViewRef = useRef()

  const clear = () => {
    setMessages([])
  }

  const send = () => {
    if(result.trim().length > 0) {
      let newMessages = [...messages]
      newMessages.push({role: 'user', content: result.trim()})
      setMessages([...newMessages])
      setResult('')
      updateScrollView()

      apiCall(result.trim(), newMessages)
        .then(res => {
          if(res.success) {
            setMessages([...res.data])
            updateScrollView()
            setResult('')
          } else {
            setResult('')
            updateScrollView()
          }
        }
      )
    }
  }

  const updateScrollView = () => {
    setTimeout(() => {
      ScrollViewRef?.current?.scrollToEnd({animated: true})
    }, 200);
  }

  return (
    <View className='flex-1 bg-white'>
      <SafeAreaView className='flex-1 flex mx-5'>
        {/* icon */}
        <View className='flex-row justify-center'>
          <Image source={require('../assets/images/bot.png')} className='w-32 h-32' />
        </View>

        {/* features */}
        {
          messages.length > 0
            ? (
              <View className='flex-1 space-y-2'>
                <Text className='font-semibold text-gray-700 text-2xl mt-4'>Asistente</Text>
                <View className='bg-neutral-200 rounded-3xl p-4 h-[88%] max-h-[88%]'>
                  <ScrollView className='space-y-4'
                    ref={ScrollViewRef}
                    showsVerticalScrollIndicator={false}
                    contentContainerStyle={{paddingBottom: 10,}}
                    bounces={false}
                  >
                    {
                      messages.map((message, index) => {
                        if(message.role == 'assistant') {
                          if(message.content.includes('https')) {
                            // Image
                            return (
                              <View className='flex-row justify-start' key={index}>
                                <View className='bg-emerald-200 rounded-2xl flex p-2 rounded-tl-none'>
                                  <Image
                                    className='rounded-2xl'
                                    source={{uri: message.content}} 
                                    style={{width: 230, height: 230,}} 
                                    resizeMode='contain'
                                  />
                                </View>
                              </View>
                            )
                          } else {
                            // Text
                            return (
                              <View className='flex-row justify-start' key={index}>
                                <View className='bg-emerald-200 rounded-xl p-2 rounded-tl-none'>
                                  <Text className='text-base'>{message.content}</Text>
                                </View>
                              </View>
                            )
                          }
                        } else {
                          // user input
                          return (
                            <View className='flex-row justify-end' key={index}>
                              <View className='bg-white rounded-xl p-2 rounded-tr-none'>
                                <Text className='text-base'>{message.content}</Text>
                              </View>
                            </View>
                          )
                        }
                      })
                    }
                  </ScrollView>
                </View>
              </View>
            ) : (
              <Features />
            )
        }

        {/* input text*/}
        <View className='flex-row items-center mb-4 bg-white pt-4 rounded-t-lg space-x-4'>

          <View className={`bg-emerald-300 ${messages.length > 0 ? 'w-[80%]' : 'w-[100%]'} rounded-3xl flex-row justify-between items-center p-1`}>
            <TextInput className='w-[80%] pl-6 text-xl text-[#666]'
              placeholder='Mensaje'
              placeholderTextColor='#777'
              value={result}
              onChangeText={setResult}
            />
            {result.trim().length > 0
              && (
                <TouchableOpacity onPress={() => send()} className='rounded-full bg-white p-2'>
                  <PaperAirplaneIcon size={30} color='rgb(110 231 183)' />
                </TouchableOpacity>    
              )
            }
          </View>
          {
            messages.length > 0
              && (
                <TouchableOpacity onPress={() => clear()} className='bg-neutral-400 rounded-3xl p-2'>
                  <TrashIcon size={30} color='white' />
                </TouchableOpacity>
              )
          }
        </View>
      </SafeAreaView>
    </View>
  )
}

export default Home