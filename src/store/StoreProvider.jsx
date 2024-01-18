import React, { Children } from 'react'
import { Provider } from 'react-redux'
import store from './Store'

const StoreProvider = ({ children }) => {
    return (
        <Provider store={store}>
            {children}
        </Provider>
    )
}

export default StoreProvider