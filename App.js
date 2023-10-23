import React from "react"
import { StatusBar } from "expo-status-bar"
import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native"

export default function App() {
  const [selectedDish, setSelectedDish] = React.useState()

  const dishes = [
    {
      name: "Kebab 1",
      description: "Pue la sueur",
      price: 10,
      imageUrl:
        "https://assets.afcdn.com/recipe/20210304/118354_w1024h1024c1cx1060cy707.jpg",
    },
    {
      name: "Kebab 2",
      description: "Pue la sueur",
      price: 10,
      imageUrl:
        "https://assets.afcdn.com/recipe/20210304/118354_w1024h1024c1cx1060cy707.jpg",
    },
    {
      name: "Kebab 3",
      description: "Pue la sueur",
      price: 10,
      imageUrl:
        "https://assets.afcdn.com/recipe/20210304/118354_w1024h1024c1cx1060cy707.jpg",
    },
  ]

  const [isCartShown, setIsCartShown] = React.useState(false)

  const [cart, setCart] = React.useState([])
  if (isCartShown) {
    return (
      <View>
        <TouchableOpacity
          onPress={() => {
            isCartShown(false)
          }}
        >
          <Text>Retour</Text>
        </TouchableOpacity>
        <Text>Panier</Text>
        {cart.map((item) => (
          <View
            style={{
              margin: 10,
              padding: 10,
              borderColor: "lightgray",
              borderRadius: 10,
              flexDirection: "row",
              justifyContent: "space-between",
            }}
          >
            <Text>{item.name}</Text>
            <Text>{item.price}</Text>
          </View>
        ))}
      </View>
    )
  }

  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={() => {
          setIsCartShown(true)
        }}
      >
        <Text>🛒 {cart && cart.length}</Text>
      </TouchableOpacity>
      {selectedDish && (
        <View>
          <Text>{selectedDish.name}</Text>
          <TouchableOpacity
            onPress={() => {
              setCart([...cart, selectedDish])
              setSelectedDish(null)
            }}
          >
            <Text>Selectionner</Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => {
              setSelectedDish(null)
            }}
          >
            <Text>Retour</Text>
          </TouchableOpacity>
        </View>
      )}
      {!selectedDish && (
        <View
          style={{
            flexDirection: "row",
            flexWrap: "wrap",
            justifyContent: "space-between",
          }}
        >
          {dishes.map((item) => (
            <TouchableOpacity
              onPress={() => {
                setSelectedDish(item)
              }}
            >
              <View style={styles.itemContainer}>
                <Image
                  style={{ width: 150, height: 150 }}
                  source={{
                    uri: item.imageUrl,
                  }}
                />
                <View
                  style={{
                    padding: 10,
                  }}
                >
                  <View
                    style={{
                      flexDirection: "row",
                      justifyContent: "space-between",
                    }}
                  >
                    <Text>{item.name}</Text>
                    <Text>{item.price} $</Text>
                  </View>
                  <Text>{item.description}</Text>
                </View>
              </View>
            </TouchableOpacity>
          ))}
        </View>
      )}
      <StatusBar style="auto" />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    padding: 30,
  },
  itemContainer: {
    marginTop: 10,
    borderWidth: 1,
    borderColor: "lightgray",
    borderRadius: 10,
  },
})
