import React from 'react'
import { Pressable, SafeAreaView, Text } from 'react-native'
import { TweetContent } from './TweetContent'
const Tweet = ({tweet}) => {
  return (
    <Pressable>
          <TweetContent tweet={tweet} />
    </Pressable>
  )
}

export default Tweet