import { View, Text, FlatList, StyleSheet, TextInput, TouchableOpacity, Image } from 'react-native';
import { SafeAreaView } from "react-native-safe-area-context";
import { MagnifyingGlassIcon } from "react-native-heroicons/outline";
import React, { useLayoutEffect, useState, useEffect } from 'react'
import axios from 'axios';
import HeadSection from './HeadSection';

const imagesList = {
  Ajwan: require('../assets/cropImages/Ajwan.png'),
  Amaranthus: require('../assets/cropImages/Amaranthus.png'),
  Amla: require('../assets/cropImages/Amla.png'),
  Apple: require('../assets/cropImages/Apple.jpg'),
  Amphophalus: require('../assets/cropImages/amphophalus.png'),
  Apple: require('../assets/cropImages/Apple.jpg'),
  Ashgourd: require('../assets/cropImages/Ashgourd.png'),
  Banana: require('../assets/cropImages/Banana.png'),
  Beans: require('../assets/cropImages/Beans.png'),
  Beetroot: require('../assets/cropImages/Beetroot.png'),
  'Bengal Gram(Gram)(Whole)': require('../assets/cropImages/BengalGram.jpg'),
  'Black Gram (Urd Beans)(Whole)': require('../assets/cropImages/BlackGram.jpg'),
  Brinjal: require('../assets/cropImages/Brinjal.png'),
  Cabbage: require('../assets/cropImages/Cabbage.png'),
  Capsicum: require('../assets/cropImages/Capsicum.png'),
  Carrot: require('../assets/cropImages/Carrot.png'),
  Cauliflower: require('../assets/cropImages/Cauliflower.png'),
  Cashewnuts: require('../assets/cropImages/Cashewnuts.png'),
  'Castor Seed': require('../assets/cropImages/Castor.png'),
  Cauliflower: require('../assets/cropImages/Cauliflower.png'),
  Cloves: require('../assets/cropImages/Cloves.png'),
  Coconut: require('../assets/cropImages/Coconut.png'),
  Colacasia: require('../assets/cropImages/Colacasia.png'),
  'Coriander(Leaves)': require('../assets/cropImages/Coriander.jpg'),
  Cotton: require('../assets/cropImages/Cotton.png'),
  Drumstick: require('../assets/cropImages/Drumstick.png'),
  Garlic: require('../assets/cropImages/Garlic.png'),
  Grapes: require('../assets/cropImages/Grapes.png'),
  'Green Chilli': require('../assets/cropImages/Green_chilli.jpg'),
  Groundnut: require('../assets/cropImages/Groundnut.png'),
  Guar: require('../assets/cropImages/Guar.png'),
  Guava: require('../assets/cropImages/Guava.png'),
  'Jowar(Sorghum)': require('../assets/cropImages/Jowar.jpg'),
  Jute: require('../assets/cropImages/Jute.png'),
  Kinnow: require('../assets/cropImages/Kinnow.png'),
  Lemon: require('../assets/cropImages/Lemon.png'),
  Lily: require('../assets/cropImages/Lilly.png'),
  Lime: require('../assets/cropImages/Lime.png'),
  Linseed: require('../assets/cropImages/Linseed.png'),
  Maize: require('../assets/cropImages/Maize.png'),
  Mango: require('../assets/cropImages/Mango.png'),
  'Moussambi(Sweet Lime)': require('../assets/cropImages/Mousambhi_sweet.jpg'),
  Mustard: require('../assets/cropImages/Mustard.png'),
  Onion: require('../assets/cropImages/Onion.png'),
  Orange: require('../assets/cropImages/Orange.png'),
  Orchid: require('../assets/cropImages/Orchid.png'),
  Papaya: require('../assets/cropImages/Papaya.png'),
  Pineapple: require('../assets/cropImages/Pineapple.png'),
  Plum: require('../assets/cropImages/Plum.png'),
  Pomegranate: require('../assets/cropImages/Pomegranate.png'),
  Potato: require('../assets/cropImages/Potato.png'),
  Pumpkin: require('../assets/cropImages/Pumpkin.png'),
  Radish: require('../assets/cropImages/Raddish.png'),
  Rice: require('../assets/cropImages/Rice.png'),
  Rubber: require('../assets/cropImages/Rubber.png'),
  Safflower: require('../assets/cropImages/Safflower.png'),
  Seetapal: require('../assets/cropImages/Seetapal.png'),
  Snakeguard: require('../assets/cropImages/snakeguard.png'),
  Soyabean: require('../assets/cropImages/Soyabean.png'),
  Spinach: require('../assets/cropImages/Spinach.png'),
  Sugar: require('../assets/cropImages/Sugar.png'),
  Tapioca: require('../assets/cropImages/Tapioca.png'),
  Tinda: require('../assets/cropImages/Tinda.png'),
  Tomato: require('../assets/cropImages/Tomato.png'),
  Turmeric: require('../assets/cropImages/Turmeric.png'),
  Turnip: require('../assets/cropImages/Turnip.png'),
  Walnut: require('../assets/cropImages/Walnut.png'),
  Wheat: require('../assets/cropImages/Wheat.png'),
  'White Peas': require('../assets/cropImages/WhitePeas.jpg'),
}


const Home = ({navigation}) => {

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false
    });
  }, [])

  const [data, setData] = useState([])
  const [finaldata, setfinaldata] = useState([]);
  const [Value, onChangeValue] = useState("");

  function getdata(commodity = "", limit = 2000) {
    let url = 'https://api.data.gov.in/resource/9ef84268-d588-465a-a308-a864a43d0070?api-key=579b464db66ec23bdd0000019eaed1ae95144f925f630f26665d3a02&format=json';
    if (commodity !== "") {
      url = url + '&filters[commodity]=' + commodity;
    }
    if (limit > 0) {
      url = url + '&limit=' + limit;
    }
    axios.get(url).then((res) => {
      let records = res.data.records;
      // console.log(records.length);
      let uniquedata = [];
      let result = [];
      records.forEach((c) => {
        if (!uniquedata.includes(c.commodity)) {
          uniquedata.push(c.commodity);
          result.push(c);
        }
      });
      // result.sort((a, b) => {
      //   return a.commodity.localeCompare(b.commodity);
      // });
      setData(result);
      setfinaldata(result);
      console.log(result.length);
    }).catch((err) => {
      console.log(err);
    }
    )
  }

  function onChangetext(text) {
    onChangeValue(text);
    if (text) {
      let result = data.filter((c) => {
        return c.commodity.toLowerCase().includes(text.toLowerCase());
      });
      setfinaldata(result);
    } else {
      setfinaldata(data);
    }

  }

  useEffect(() => {
    getdata();
  }, [])

  return (
    <SafeAreaView>
      <HeadSection />
      <View style={styles.searchconatiner}>
        <MagnifyingGlassIcon size={20} color="#000" />
        <TextInput
          style={styles.input}
          placeholder='Search Commodity'
          onChangeText={onChangetext}
          value={Value}
        />
      </View>
      <Text>Comodity Prices</Text>
      <Text>{finaldata.length}</Text>
      <FlatList
        data={finaldata}
        renderItem={({ item }) => (
          <View>
            <TouchableOpacity onPress={() => navigation.navigate('Details', {commodity: item.commodity})}>
            <View style={styles.card}>
              {imagesList[item.commodity] && <Image
                  // key={item.id}
                  style={{ width: 40, height: 40 }}
                  source={imagesList[item.commodity]}
                />}
            
              <Text style={{ fontSize: 15, fontWeight: 'bold' }}>{item.commodity}</Text>
              <Text>updated on {item.arrival_date}</Text>
              <Text style={{ marginTop: 5 }}>Min Rs.{item.min_price} - Max Rs.{item.max_price}</Text>

            </View>
            </TouchableOpacity>
          </View>
        )}
      />

    </SafeAreaView>
  )
}

styles = StyleSheet.create({
  card: {
    backgroundColor: '#f0faed',
    padding: 10,
    marginHorizontal: 10,
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 5,
    marginTop: 10,
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  input: {
    marginLeft: 10,
    borderRadius: 5,
    flex: 1,
  },
  searchconatiner: {
    backgroundColor: '#fff',
    padding: 10,
    marginHorizontal: 10,
    flexDirection: 'row',
    borderWidth: 1,
    marginVertical: 10,
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
})

export default Home