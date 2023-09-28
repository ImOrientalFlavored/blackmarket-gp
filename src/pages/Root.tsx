import { CssBaseline } from '@mui/material';
import { Outlet } from "react-router-dom";
import { LayoutGrid } from '~components/layout/LayoutGrid';
import { ThemeProvider } from '@emotion/react';
import { Provider } from'react-redux';
import  store from '~/store';
import theme from '~/theme';

export default function Root(){
    return(
        <CssBaseline>
            <ThemeProvider theme={theme}>
                <Provider store={store}>
                    <LayoutGrid>
                        <Outlet />
                    </LayoutGrid>
                </Provider>
            </ThemeProvider>
        </CssBaseline>

    )
}