import React from "react";
import { SafeAreaView, Text, FlatList, StyleSheet, ScrollView, Image, Dimensions } from "react-native";
import news_data from './src/components/Card/news_data.json';
import news_banner_data from './src/components/Card/news_banner_data.json'
import Card from './src/components/Card/Card'

function App() {

  const renderNews = ({ item }) => <Card news={item} />;

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.header}>News</Text>
      <FlatList
        ListHeaderComponent={() => (
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            {
              news_banner_data.map(bannerNews => <Image style={styles.banner_image} source={{ uri: bannerNews.imageUrl }} />)
            }
          </ScrollView>
        )}
        keyExtractor={item => item.u_id.toString()}
        data={news_data}
        renderItem={renderNews}
      />
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#D8D8D8',
    paddingTop: 50,
  },
  banner_image: {
    height: Dimensions.get('window').height / 8,
    width: Dimensions.get('window').width / 3,
  },
  header: {
    fontWeight: "bold",
    fontSize: 45,
  }
})

export default App;