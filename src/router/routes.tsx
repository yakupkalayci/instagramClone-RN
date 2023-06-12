import Home from "../screens/Home"

export type Troute = {
    id: number;
    name: string;
    navigateKey: string;
    Component: (props:any) => JSX.Element;
};

export const routes:Troute[] = [
    {
        id: 0,
        name: 'home',
        navigateKey: 'home',
        Component: Home
    }
]