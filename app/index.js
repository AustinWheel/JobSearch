import {useState} from 'react'
import { View, Text, ScrollView, SafeAreaView , StyleSheet} from 'react-native';
import {Stack, useRouter} from 'expo-router';

import {COLORS, icons, images, SIZES} from '../constants';
import {
    Nearbyjobs, Popularjobs, ScreenHeaderBtn, Welcome
} from '../components';

const Home = () => {
    const router = useRouter();
    const [searchTerm, setSearchTerm] = useState("");

    return (
        <SafeAreaView
        style={styles.container}
        >
            <Stack.Screen 
                options={
                    {
                        headerStyle: {backgroundColor: COLORS.lightWhite},
                        headerShadowVisible: false,
                        headerLeft: () => (
                            <ScreenHeaderBtn iconUrl={icons.menu} dimension="60%" />
                        ),
                        headerRight: () => (
                            <ScreenHeaderBtn iconUrl={images.profile} dimension="100%" />
                        ),
                        headerTitle:""
                    }
                }
            />
            <ScrollView
                showsVerticalScrollIndicator={false}
            >
                <View style={styles.scrollView}>
                    <Welcome 
                        searchTerm={searchTerm}
                        setSearchTerm={setSearchTerm}
                        handleClick={() => {
                            if (searchTerm) {
                                router.push(`/search/${searchTerm}`)
                            }
                        }}
                    />
                    <Popularjobs />
                    <Nearbyjobs />
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLORS.lightWhite,
    },
    scrollView: {
        flex: 1,
        padding: SIZES.medium,
    }
})

export default Home;