export default function compStyleOverrides(themePalette) {
    return {
        MuiAccordion: {
            styleOverrides: {
                root: {
                    marginBottom: '16px',
                    borderRadius: '6px',
                    ":first-of-type": {
                        borderRadius: '6px'
                    },
                    ":last-of-type": {
                        borderRadius: '6px'
                    },
                    backgroundColor: themePalette.dark.light
                }
            }
        },
        MuiAccordionSummary: {
            styleOverrides: {
                root: {
                    color: themePalette.text.primary,
                },
                
                expandIconWrapper: {
                    color: themePalette.primary.light
                }
            }
        },
    };
}
