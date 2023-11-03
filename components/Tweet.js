import React from 'react'
import { Pressable } from 'react-native'
import { TweetContent } from './TweetContent'
import { useNavigation } from '@react-navigation/native'
const Tweet = ({tweet}) => {
  const {navigate} = useNavigation()
  return (
    <Pressable
    onPress={()=>{
      navigate("TweetDetails",{tweet})
    }}>
          <TweetContent tweet={tweet} />
    </Pressable>
  )
}

export default Tweet