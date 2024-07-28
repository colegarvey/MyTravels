import { View, SafeAreaView } from 'react-native';
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { Stack, useRouter } from "expo-router";

import { Register, Login, Welcome, Profile, Default } from '../components';
import { COLORS, SIZES } from '../constants';

const App = () => {
    const router = useRouter();
    const insets = useSafeAreaInsets();

    return (
    <SafeAreaView style={{flex: 1, paddingTop: insets.top, paddingBottom: insets.bottom, paddingLeft: insets.left, paddingRight: insets.right}}>
        {/* <Stack.Screen component={Register}/> */}
        <View>
            <Register/>
        </View>
    </SafeAreaView>
    )
}

export default App;