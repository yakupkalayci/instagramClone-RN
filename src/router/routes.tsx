import DirectMessages from "../screens/DirectMessages";
import Home from "../screens/Home"
import * as RootNavigation from '../router/RootNavigation';
import Notifications from "../screens/Notifications";

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
    FullContent?: JSX.Element;
};

export type Troute = {
    id: number;
    name: string;
    navigateKey: string;
    Component: (props:any) => JSX.Element;
    headerOptions: THeaderOptions;
};

export const routes:Troute[] = [
    {
        id: 0,
        name: 'home',
        navigateKey: 'home',
        Component: Home,
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
        headerOptions: {
            showLogo: false,
            canGoBack: true,
            leftLabel: 'Notifications',
            hasRightButtons: false
        }
    }
]