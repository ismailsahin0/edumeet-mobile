import React, { useState } from "react";
import { View, ImageBackground } from "react-native";
import CardStack, { Card } from "react-native-card-stack-swiper";
import { City, Filters, CardItem } from "../components";
import styles from "../assets/styles";
import DEMO from "../assets/data/demo";
import { Button } from "../components";

const Home = ({ navigation }) => {
  const [swiper, setSwiper] = useState(null);

  return (
    <ImageBackground
      source={require("../assets/images/bg.png")}
      style={styles.bg}
    >
      <View style={styles.containerHome}>
        <View style={styles.top}>
          <City />
          <Filters />
        </View>
        <Button
          mode="outlined"
          onPress={() =>
            navigation.reset({
              index: 0,
              routes: [{ name: 'Home' }],
            })
          }
        >
          Logout
        </Button>
        <CardStack
          loop
          verticalSwipe={false}
          renderNoMoreCards={() => null}
          ref={(newSwiper) => setSwiper(newSwiper)}
        >
          {DEMO.map((item) => (
            <Card key={item.id}>
              <CardItem
                hasActions
                image={item.image}
                name={item.name}
                description={item.description}
                matches={item.match}
              />
            </Card>
          ))}
        </CardStack>
      </View>
    </ImageBackground>
  );
};

export default Home;
