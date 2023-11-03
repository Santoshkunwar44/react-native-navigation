import React, { useLayoutEffect } from 'react'
import { SafeAreaView ,StyleSheet ,FlatList, Pressable ,Image } from 'react-native'
import { tweets } from '../../data/tweet'
import Tweet from '../../components/Tweet'
import { useNavigation } from '@react-navigation/native'
const Feed = () => {
  const navigation =useNavigation()

  useLayoutEffect(()=>{
    navigation.setOptions({
      headerLeft:()=>(
        <Pressable onPress={()=>navigation.openDrawer()}>
            <Image
            src={"https://images.pexels.com/photos/18028245/pexels-photo-18028245/free-photo-of-japanese-chin-dog-sitting-on-wooden-table.jpeg?auto=compress&cs=tinysrgb&w=1200&lazy=load"}
            style={{width:40,height:40,borderRadius:100,objectFit:"cover",marginLeft:40}}
            />

        </Pressable>
      )
    })
  },[])

  return (
    <SafeAreaView style={{flex:1,padding:20}}>
      <FlatList
        data={tweets.slice(0, 30)}
        keyExtractor={(item) => {
          return item.id;
        }}
        renderItem={({ item }) => {
          return <Tweet tweet={item} />;
        }}
     
      />
    </SafeAreaView>
  )
}

export default Feed

const styles = StyleSheet.create({
  divider: {
    width: "100%",
    height: StyleSheet.hairlineWidth,
    backgroundColor: "#DDD",
  },
  header: {
    height: 40,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#1DA1F2",
  },
  footer: {
    height: 40,
    justifyContent: "center",
    alignItems: "center",
  },
  headerTitle: {
    color: "#FFFFFF",
    padding: 8,
    borderRadius: 12,
    fontSize: 12,
  },
  footerTitle: {
    padding: 8,
    borderRadius: 12,
    fontSize: 12,
  },
  emptyComponentTitle: {
    color: "black",
    fontSize: 20,
    fontWeight: "bold",
  },
  emptyComponentSubtitle: {
    color: "#808080",
    padding: 8,
    fontSize: 14,
    textAlign: "center",
  },
  emptyComponent: {
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
  },
});