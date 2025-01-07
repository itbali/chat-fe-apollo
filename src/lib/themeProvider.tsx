import {Button, ConfigProvider, theme} from 'antd';
import React, {useState, useEffect, PropsWithChildren} from 'react';

const ThemeProvider = ({children}: PropsWithChildren) => {
    const [isDarkMode, setIsDarkMode] = useState(false);

    useEffect(() => {
        document.body.style.backgroundColor = isDarkMode ? '#141414' : '#ffffff';
    }, [isDarkMode]);

    return (
        <ConfigProvider
            theme={{
                algorithm: isDarkMode ? theme.darkAlgorithm : theme.defaultAlgorithm,
            }}
        >
            <Button onClick={() => setIsDarkMode(!isDarkMode)}>
                Переключить тему
            </Button>
            {children}
        </ConfigProvider>
    );
};

export default ThemeProvider;
