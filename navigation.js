import {NavigationContainer} from "@react-navigation/native"
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs"
import Notification from "./screens/TabScreen/Notification"
import Setting from "./screens/TabScreen/Setting"
import Feed from "./screens/TabScreen/Feed"
import { Ionicons } from '@expo/vector-icons';

const Tab = createBottomTabNavigator()
function TabGroup(){
    return <Tab.Navigator
    screenOptions={({route,navigation})=>({
        tabBarIcon:({color,size,focused})=>{
            let iconName;
            if(route.name==="Feed"){
                iconName = focused? "home":"home-outline"
            }else if(route.name==="Setting"){
                iconName=focused ?"settings":"ios-settings-sharp"
            }else if(route.name==="Notification"){
                iconName  = focused ? "ios-notifications":"notifications-outline"
            }
            return <Ionicons  name={iconName} size={size} color={color}/>
        },
        tabBarActiveTintColor:"#1DA1F2",
        tabBarInactiveTintColor:"gray"
    })}

    >
        <Tab.Screen name="Feed" component={Feed}/>
        <Tab.Screen name="Setting" component={Setting}/>
        <Tab.Screen name="Notification" component={Notification}/>
    </Tab.Navigator>
}

export const Navigation=()=>{
    return (
        <NavigationContainer>
            <TabGroup/>
        </NavigationContainer>
    )
}