import React, { FC, memo } from "react";
import {
  StyleSheet,
  TextInput,
  View,
  Keyboard,
  Button,
  useColorScheme,
  Pressable,
} from "react-native";
import Entypo from "@expo/vector-icons/Entypo";
import Feather from "@expo/vector-icons/Feather";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";

type IProps = {
  clicked: boolean;
  searchPhrase: string;
  setSearchPhrase: (val: string) => void;
  setClicked: (val: boolean) => void;
};

const SearchBar: FC<IProps> = ({
  clicked,
  searchPhrase,
  setSearchPhrase,
  setClicked,
}) => {
  const theme = useColorScheme();

  return (
    <View style={styles.container}>
      <View
        style={
          clicked ? styles.searchBar__clicked : styles.searchBar__unclicked
        }
      >
        {/* search Icon */}
        <Feather
          name="search"
          size={20}
          color="black"
          style={{ marginLeft: 1 }}
        />
        {/* Input field */}
        <TextInput
          style={styles.input}
          placeholder="Search here"
          value={searchPhrase}
          onChangeText={setSearchPhrase}
          onFocus={() => {
            setClicked(true);
          }}
        />
        {/* cross Icon, depending on whether the search bar is clicked or not */}
        {clicked && (
          <Entypo
            name="cross"
            size={20}
            color="black"
            style={{ padding: 1 }}
            onPress={() => {
              setSearchPhrase("");
            }}
          />
        )}
      </View>
      {/* cancel button, depending on whether the search bar is clicked or not */}
      {clicked && (
        <View style={styles.cancelBtnContainer}>
          <Pressable
            style={styles.cancelBtn}
            onPress={() => {
              Keyboard.dismiss();
              setClicked(false);
            }}
          >
            <MaterialCommunityIcons
              name="keyboard-off"
              size={18}
              color="black"
            />
          </Pressable>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    top: '2%'
  },
  searchBar__unclicked: {
    paddingHorizontal: 14,
    paddingVertical: 6,
    flexDirection: "row",
    width: "95%",
    backgroundColor: "#fff",
    borderRadius: 16,
    alignItems: "center",
    justifyContent: "center",
    elevation: 10,
  },
  searchBar__clicked: {
    paddingHorizontal: 14,
    paddingVertical: 6,
    flexDirection: "row",
    width: "82%",
    backgroundColor: "#fff",
    borderRadius: 16,
    alignItems: "center",
    justifyContent: "space-evenly",
    elevation: 10,
  },
  input: {
    fontSize: 16,
    marginLeft: 20,
    width: "90%",
    color: "#f2f2f2",
  },
  cancelBtnContainer: { paddingLeft: 6, elevation: 10 },
  cancelBtn: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: "grey",
  },
});

export default memo(SearchBar);
