import { StyleSheet } from "react-native";
import { COLORS, FONT, SIZES } from "../../../constants";

const styles = StyleSheet.create({
    container: {
        marginTop: SIZES.xLarge,
    },
    inField: {
        height: 40,
        margin: 12,
        borderWidth: 1,
        padding: 10,
    },
    submitBtn: {
        backgroundColor: COLORS.accent, 
    },
});

export default styles;