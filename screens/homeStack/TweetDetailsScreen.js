import { useNavigation, useRoute } from '@react-navigation/native'
import React, { useLayoutEffect } from 'react'
import { SafeAreaView } from 'react-native'
import { TweetContent } from '../../components/TweetContent'

const TweetDetailsScreen = () => {

  const router = useRoute()
  const navigation =useNavigation()

  useLayoutEffect(()=>{
    navigation.setOptions({
      headerTitle:router.params.tweet?.author?.name
    })
  },[])



  return (

    <SafeAreaView style={{flex:1}}>
        <TweetContent tweet={router.params.tweet}/>
    </SafeAreaView>
  )
}

export default TweetDetailsScreen