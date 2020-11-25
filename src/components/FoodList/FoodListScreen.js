/**
 * Food List Component that will open a modal to show food lists.
 */
import React, { Component } from 'react';
import {
    View,
    Text,
    TouchableOpacity,
    ActivityIndicator
} from 'react-native';
import { Icon, Button } from 'native-base';
import { connect } from 'react-redux';
import { FoodListModal } from './FoodListModal'
import { colors } from '../../constants/AppColors'
import * as actions from '../../actions';
import styles from './styles';

class FoodListScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            toggleFoodList: false, // to show and hide food list modal
            foodList: [], // array storing food list data
        };
    }

    // fetching food list get api
    async componentDidMount() {
        this.props.showFoodListLoaderAction(true)
        this.props.getFoodListApiAction()
    }

    // toggle show and hide of food list modal
    handleShowFoodList = () => {
        this.setState({
            toggleFoodList: !this.state.toggleFoodList
        })
    }
    render() {
        const { loading, filteredFoodList } = this.props.foodListReducerState
        return (
            <View style={styles.container}>
                {loading ? (
                    <ActivityIndicator color={colors.blue} />
                ) :
                    <View>
                        <TouchableOpacity
                            onPress={() => this.handleShowFoodList()}
                            style={styles.foodListButton}
                        >
                            <Text style={styles.foodButtonText}>Show Food List</Text>
                        </TouchableOpacity>
                        {this.state.toggleFoodList &&
                            < FoodListModal
                                isVisible={this.state.toggleFoodList}
                                foodList={filteredFoodList || []}
                                toggleFoodListModal={this.handleShowFoodList}
                            />
                        }

                    </View>
                }
            </View>
        );
    }
}

const mapStateToProps = state => {
    return {
        foodListReducerState: state.foodListReducer,
    };
};

export default connect(mapStateToProps, actions)(FoodListScreen);
