// Import Screens
import Home from "../screens/Home"
import DirectMessages from "../screens/DirectMessages";
import Notifications from "../screens/Notifications";
import Explore from "../screens/Explore";
import Profile from "../screens/profile/Profile";
import Follow from "../screens/profile/Follow";
import Login from "../screens/auth/Login";
import Signup from "../screens/auth/Signup";

// Import Navigation
import * as RootNavigation from '../router/RootNavigation';

// Import Components
import SearchInput from "../components/search-input/SearchInput";

export type TRightButton = {
    name: string;
    isIcon: boolean;
    isImage: boolean;
    action: () => void;
}

export type THeaderOptions = {
    showLogo: boolean;
    hasRightButtons: boolean;
    rightButtons?: TRightButton[];
    canGoBack: boolean;
    leftLabel?: string;
    fullContent?: JSX.Element;
};

export type Troute = {
    id: number;
    name: string;
    navigateKey: string;
    Component: (props:any) => JSX.Element;
    hasHeader: boolean;
    hasFooter: boolean;
    headerOptions?: THeaderOptions;
};

export const routes:Troute[] = [
    {
        id: 0,
        name: 'home',
        navigateKey: 'home',
        Component: Home,
        hasHeader: true,
        hasFooter: true,
        headerOptions: {
            showLogo: true,
            hasRightButtons: true,
            rightButtons: [
                {
                    name: 'cards-heart-outline',
                    isIcon: true,
                    isImage: false,
                    action: () => RootNavigation.navigate('notifications')
                }, 
                {
                    name: 'send',
                    isIcon: false,
                    isImage: true,
                    action: () => RootNavigation.navigate('dm')
                }
            ],
            canGoBack: false
        }
    },
    {
        id: 1,
        name: 'dm',
        navigateKey: 'dm',
        Component: DirectMessages,
        hasHeader: true,
        hasFooter: true,
        headerOptions: {
            showLogo: false,
            canGoBack: true,
            leftLabel: 'Direct',
            hasRightButtons: true,
            rightButtons: [
                {
                    isIcon: true,
                    isImage: false,
                    name: 'camera-outline',
                    action: () => {}
                },
                {
                    isIcon: true,
                    isImage: false,
                    name: 'square-edit-outline',
                    action: () => {}
                }
            ]
        }
    },
    {
        id: 2,
        name: 'notifications',
        navigateKey: 'notifications',
        Component: Notifications,
        hasHeader: true,
        hasFooter: true,
        headerOptions: {
            showLogo: false,
            canGoBack: true,
            leftLabel: 'Notifications',
            hasRightButtons: false
        }
    },
    {
        id: 3,
        name: 'explore',
        navigateKey: 'explore',
        Component: Explore,
        hasHeader: true,
        hasFooter: true,
        headerOptions: {
            showLogo: false,
            canGoBack: false,
            hasRightButtons: false,
            fullContent: SearchInput()
        }
    },
    {
        id: 4,
        name: 'profile',
        navigateKey: 'profile',
        Component: Profile,
        hasHeader: true,
        hasFooter: true,
        headerOptions: {
            showLogo: false,
            canGoBack: false,
            leftLabel: 'username',
            hasRightButtons: true,
            rightButtons: [
                {
                    isIcon: true,
                    isImage: false,
                    name: 'plus-box-outline',
                    action: () => {}
                },
                {
                    isIcon: true,
                    isImage: false,
                    name: 'menu',
                    action: () => {}
                }
            ]
        }
    },
    {
        id: 5,
        name: 'follow',
        navigateKey: 'follow',
        Component: Follow,
        hasHeader: true,
        hasFooter: true,
        headerOptions: {
            showLogo: false,
            canGoBack: true,
            leftLabel: 'username',
            hasRightButtons: false,
        }
    },
    {
        id: 6,
        name: 'login',
        navigateKey: 'login',
        Component: Login,
        hasHeader: false,
        hasFooter: false,
    },
    {
        id: 7,
        name: 'signup',
        navigateKey: 'signup',
        Component: Signup,
        hasHeader: false,
        hasFooter: false,
    }
]