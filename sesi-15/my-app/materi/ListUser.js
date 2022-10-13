import { useEffect, useState } from "react";
import { ScrollView, StatusBar, StyleSheet, Text, View, Image } from "react-native";

let posts = []

for (let i = 1; i < 20; i++) {
  posts.push({
    title: `title ${i}`,
    description: `Deskripsi untuk title ${i}`
  })
}

export default function ListUser({ route }) {
    const [dataApi, setDataApi] = useState([])
    const api_url = 'https://randomuser.me/api/?results=15'
    const gettingData = async () => {
        const response = await fetch(`${api_url}`)
        const data = await response.json()
        setDataApi(data.results)
    }

    useEffect(()=>{
        gettingData()
    },[])
    
  return (
    <View style={styles.container}>
     
     <Text style={{fontSize: 30}}>
         Customers
     </Text>
     <ScrollView style={styles.scroll}>
         {
          dataApi.map((user, idx) => (
              <View style={styles.box} key={idx}>
                  <View>
                      <Image
                          source=
                          {{uri: user.picture.thumbnail}}
                          style={{ width: 60, height: 60 }}
                      />
                  </View>
                  <View>
                      <Text style={styles.title}>
                          {user.name.title} {user.name.first} {user.name.last}
                         </Text>
                         <Text>
                             {user.gender}
                         </Text>
                         <Text>
                             {user.location.city}, {user.location.country}
                         </Text>
                         <Text>
                             {user.email}
                         </Text>
                     </View>
                 </View>
             ))
         }
        </ScrollView>
        <StatusBar style="auto" />
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      marginTop: 25
    },
    scroll:{
      padding: 10
    },
    box:{
      marginBottom: 10,
      padding: 10,
    },
    text: {
      fontSize: 30
    },
    textInput: {
      height: 40
    },
    rowButton: {
      flexDirection: 'row',
      margin: 1
    },
    title: {
      fontSize: 20,
      fontWeight: "bold"
    }
  });