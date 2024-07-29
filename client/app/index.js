import { View, SafeAreaView } from 'react-native';
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { Stack, useRouter } from "expo-router";

import { Register, Login, ScreenHeaderBtn, Welcome, Profile, Default } from '../components';
import { COLORS, SIZES, images } from '../constants';

const App = () => {
    const router = useRouter();
    const insets = useSafeAreaInsets();

    return (
    <SafeAreaView style={{flex: 1, paddingTop: insets.top, paddingBottom: insets.bottom, paddingLeft: insets.left, paddingRight: insets.right}}>
        <Stack.Screen options={{
            headerStyle: {backgroundColor: COLORS.secondary},
            headerShadowVisible: false,
            headerRight: () => (
                <ScreenHeaderBtn iconUrl={images.profile} dimension='100%'/>
            ),
            headerTitleAlign: 'center',
            headerTitle: "MAP1"
        }}/>
        <View style={{flex: 1, padding: SIZES.medium, alignItems: 'center', backgroundColor: COLORS.primary}}>
            <Register/>
        </View>
    </SafeAreaView>
    )
}

export default App;