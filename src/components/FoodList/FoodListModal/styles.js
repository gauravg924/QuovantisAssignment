import { StyleSheet, Dimensions } from 'react-native';
import { colors } from '../../../constants/AppColors'

var { height, width } = Dimensions.get('window');

export default StyleSheet.create({
    crossIcon: {
        color: colors.lightGreyTextColor,
        fontSize: 30,
        padding: 10
    },
    itemIcon: {
        height: 40,
        width: 40,
        flex: 2,
        justifyContent: 'flex-start',
    },
    itemContainer: {
        flex: 1,
        backgroundColor: "#fff",
        // shadowColor: colors.gray,
        // shadowOffset: {
        //     width: 0,
        //     height: 5
        // },
        // shadowOpacity: 0.36,
        // shadowRadius: 6.68,
        // elevation: 11,
        borderRadius: 10,
        marginTop: 15,
        marginHorizontal: 8,
        // margin: 8,
        flexDirection: 'row',
        alignItems: 'center'
    },
    searchSection: {
        flexDirection: "row",
        justifyContent: "flex-start",
        alignItems: "center",
        backgroundColor: colors.white,
        borderColor: colors.lightBorderColor,
        borderWidth: 1,
        borderRadius: 10,
        marginHorizontal: 20,
        marginVertical: 10,
    },
    textInputStyle: {
        backgroundColor: colors.white,
        color: colors.lightBlack,
        flex: 1,
        borderColor: "transparent",
        borderWidth: 0.5,
        borderRadius: 10,
        fontFamily: "OpenSans-Regular",
        fontSize: 16,
        color: colors.lightBlack,
    },
    searchIcon: {
        padding: 10,
        fontSize: 18,
        color: colors.gray,
    },
    title: {
        fontSize: 16,
        color: colors.lightGreen,
        paddingHorizontal: 10,
        paddingVertical: 25,
        flex: 4,
        justifyContent: 'flex-start',
        textAlign: 'left'
    },
    servingSize: {
        fontSize: 16,
        color: colors.gray,
    },
    subtitle: {
        fontSize: 16,
        color: colors.gray,
        paddingHorizontal: 10,
        paddingVertical: 13,
        borderBottomColor: colors.lightBorderColor,
        borderBottomWidth: 1
    },
    subTitleView: {
        marginLeft: 8,
        marginRight: 8,
        backgroundColor: '#fff',
        borderRadius: 5
    },
    modalHeader: {
        fontSize: 20,
        textAlign: 'center',
        color: colors.lightBlack,
        paddingVertical: 10
    },
    modalContainer: {
        flex: 1,
        backgroundColor: colors.lightBackgroundColor
    },
    noData: {
        textAlign: 'center',
        margin: 40,
        fontSize: 20,
        color: colors.gray
    }
});
