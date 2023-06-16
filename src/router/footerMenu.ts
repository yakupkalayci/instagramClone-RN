export type TFooterMenu= {
    id: number;
    title: string;
    navigateKey: string;
    iconName: string;
}

export const footerMenu: TFooterMenu[] = [
    {
        id: 0,
        title: 'Home',
        navigateKey: 'home',
        iconName: 'home-variant'
    },
    {
        id: 1,
        title: 'Explore',
        navigateKey: 'explore',
        iconName: 'magnify'
    },
    {
        id: 2,
        title: 'Add',
        navigateKey: 'add',
        iconName: 'plus-box-outline',
    },
    {
        id: 3,
        title: 'Reels',
        navigateKey: 'reels',
        iconName: 'video-outline'
    },
    {
        id: 4,
        title: 'Profile',
        navigateKey: 'profile',
        iconName: 'account-circle-outline'
    },

]