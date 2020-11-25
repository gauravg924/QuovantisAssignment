import { StyleSheet } from 'react-native';
import { colors } from '../../constants/AppColors'

export default StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
    },
    foodListButton: {
        backgroundColor: colors.lightBlue,
        padding: 20,
        justifyContent: 'center',
        alignItems: 'center',
        width: '50%',
        borderRadius: 8,
        alignSelf: 'center'
    },
    foodButtonText: {
        color: colors.white,
        fontSize: 18,
    }
});
