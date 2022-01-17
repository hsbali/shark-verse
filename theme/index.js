import { createTheme } from '@mui/material/styles';

import compStyleOverrides from './compStyleOveride';
import themePalette from './palette';

export const theme = () => {
    const themeOptions = {
        direction: 'ltr',
        palette: themePalette(),
        typography: {
            fontFamily: [
              'Poppins',
              'sans-serif'
            ].join(','),
          },
    };

    const themes = createTheme(themeOptions);
    themes.components = compStyleOverrides(themePalette());

    return themes;
};

export default theme;
