// Import React
import { ReactElement } from "react";
import { SafeAreaView, KeyboardAvoidingView } from "react-native";

// Import Partials
import Header from './header/Header';
import Footer from "./footer/Footer";

import styles from '../assets/styles/layout.style';

interface ILayoutProps {
    children: ReactElement;
}

function Layout(props:ILayoutProps):JSX.Element {
    // destruct props
    const { children } = props;

    return (
        <SafeAreaView style={styles.container}>
            <Header />
            <KeyboardAvoidingView>
                {children}
            </KeyboardAvoidingView>
            <Footer />
        </SafeAreaView>
    )
}

export default Layout;