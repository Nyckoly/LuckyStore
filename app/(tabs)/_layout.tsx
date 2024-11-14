import {Tabs} from "expo-router";
import FontAwesome from '@expo/vector-icons/FontAwesome6'

export default function RootLayout(){
    return(
        <Tabs screenOptions={{tabBarActiveTintColor:'blue'}}>
            <Tabs.Screen name="home" 
            options={{title: 'Home', 
                tabBarIcon: ({color}) => <FontAwesome size={24} name="house" color={color} />}} />

            <Tabs.Screen name="categories" options={{title: 'Início', 
                headerShown:false,
            tabBarIcon: ({color}) => <FontAwesome size={24} name="layer-group" color={color} />
            }} />

            <Tabs.Screen name="whoWeAre" options={{title: 'Quem somos', 
                headerShown:false,
            tabBarIcon: ({color}) => <FontAwesome size={24} name="circle-info" color={color} />
            }} />


           
        </Tabs>
    )
}