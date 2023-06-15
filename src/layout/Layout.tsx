// Import React
import { ReactElement } from "react";
import { KeyboardAvoidingView } from "react-native";

// Import Safe Area Context
import { useSafeAreaInsets } from "react-native-safe-area-context";

// Import Gesture-Handler
import { GestureHandlerRootView } from 'react-native-gesture-handler';

// Import Partials
import Header from './header/Header';
import Footer from "./footer/Footer";

// Import Types
import { THeaderOptions } from "../router/routes";

import styles from '../assets/styles/layout.style';

interface ILayoutProps {
    children: ReactElement;
    headerOptions: THeaderOptions
}

function Layout(props:ILayoutProps):JSX.Element {
    // destruct props
    const { children, headerOptions } = props;
    const insets = useSafeAreaInsets();

    return (
        <GestureHandlerRootView style={[styles.container, {paddingTop: insets.top}]}>
            <Header options={headerOptions} />
            <KeyboardAvoidingView>
                {children}
            </KeyboardAvoidingView>
            <Footer />
        </GestureHandlerRootView>
    )
}

export default Layout;