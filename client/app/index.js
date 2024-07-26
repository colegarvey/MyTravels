import { Text, View } from 'react-native';
import { Register, Login, Welcome, Profile, Default } from '../components';


const App = () => {
    return (
        <View>
            <Text>APP</Text>
            <Register/>
            <Login/>
            <Welcome/>
            <Profile/>
            <Default/>
        </View>
    )
}

export default App;