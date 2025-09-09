import { Provider } from 'react-redux';
import { createReduxStore } from 'app/providers/storeProvider/config/store';
import { StateSchema } from 'app/providers/storeProvider/config/StateSchema';
import { ReactElement } from 'react';

interface StoreProviderProps {
    children: ReactElement | ReactElement[];
    initialState?: StateSchema;
}

export const StoreProvider = (props: StoreProviderProps) => {
    const { children, initialState } = props;

    const store = createReduxStore(initialState);

    return <Provider store={store}>{children}</Provider>;
};
