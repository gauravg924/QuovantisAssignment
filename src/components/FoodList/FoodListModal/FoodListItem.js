/**
 * Food List Item Component to display each single food list data.
 */
import React, { useState } from "react";
import {
    View,
    Text,
    TouchableOpacity,
    FlatList,
    Image
} from "react-native";
import { colors } from '../../../constants/AppColors'
import styles from "./styles";

function FoodListItem({ item }) {
    const [isExtended, setIsExtended] = useState(false); // to toggle collapsible items
    const { category } = item; // destructuring item
    const { subcategories } = category; // destructuring category

    // function to toggle collapsible view inside flat list
    const handleItemToggle = () => {
        setIsExtended(!isExtended)
    }

    return (
        <View>
            <TouchableOpacity style={styles.itemContainer} onPress={() => handleItemToggle()}>
                <Image
                    source={require("../../../../assets/images/apple.png")}
                    resizeMode="contain"
                    style={styles.itemIcon}
                />
                <Text style={styles.title}>{category.categoryName}</Text>
                <View style={{ flex: 4 }}>
                    {category.servingSize &&
                        <Text style={styles.servingSize}>{`(${category.servingSize})`}</Text>
                    }
                </View>
            </TouchableOpacity>
            {subcategories.length > 0 && isExtended &&
                <View style={styles.subTitleView}>
                    {subcategories.map((category) => {
                        return (
                            <View>
                                {category.subCategoryname !== "" &&
                                    <Text style={styles.subtitle}>{category.subCategoryname}</Text>
                                }
                            </View>
                        )
                    })
                    }
                </View>
            }
        </View>
    );
}

export default (FoodListItem);
