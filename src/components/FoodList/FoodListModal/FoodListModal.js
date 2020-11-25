/**
 * Food List Modal Component that show a modal to display food lists.
 */
import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  FlatList,
  TextInput
} from "react-native";
import Modal from 'react-native-modal';
import { connect } from 'react-redux';
import { Icon } from "native-base";
import * as actions from '../../../actions';
import FoodListItem from './FoodListItem';
import { colors } from '../../../constants/AppColors';
import styles from "./styles";

function FoodListModal({ isVisible, foodList, toggleFoodListModal, filterFoodList }) {
  const [searchText, setSearchText] = useState('')

  // renders food list each single item with flat list
  const renderItem = ({ item }) => (
    <FoodListItem item={item} />
  );

  // performing search in food list as users enters something inside search input
  const searchFilter = (text) => {
    setSearchText(text);
      filterFoodList(text)
  };

  return (
    <View style={{ flex: 1 }}>
      <Modal isVisible={isVisible}>
        <View style={styles.modalContainer}>
          <TouchableOpacity
            onPress={() => toggleFoodListModal()}
            style={styles.crossContainer}
          >
            <Icon
              type="AntDesign"
              name={"close"}
              style={styles.crossIcon}
            />
          </TouchableOpacity>
          <View>
            <Text style={styles.modalHeader}>Approved Foods List</Text>
          </View>
          <View style={styles.searchSection}>
            <Icon style={styles.searchIcon} name="search1" type="AntDesign" />
            <TextInput
              style={styles.textInputStyle}
              onChangeText={(text) => searchFilter(text)}
              value={searchText}
              placeholder="Search"
              placeholderTextColor={colors.lightBlack}
            />
          </View>
          <FlatList
            ListEmptyComponent={
              <Text
                style={styles.noData}
              >
                {' '}
                No Food List data found{' '}
              </Text>
            }
            keyExtractor={(item, index) => index.toString()}
            data={foodList}
            renderItem={renderItem}
            showsVerticalScrollIndicator={false}

          />
        </View>
      </Modal>
    </View>
  );
}
const mapStateToProps = state => {
  return {
    foodListReducerState: state.foodListReducer,
  };
};

export default connect(mapStateToProps, actions)(FoodListModal);