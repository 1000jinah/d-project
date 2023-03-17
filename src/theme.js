// color design tokens export
export const tokensDark = {
  redAccent: {
    0: "#fd3f01", // Red (Default)
    100: "#ffcebf", // Red(light)
    200: "#ff754b", // Red(chart)
  },
  greenAccent: {
    100: "#2e9875", // Green
    200: "#b8dec3", // Mint
  },
  yellowAccent: {
    100: "#f9e002", // Yellow
    200: "#f9af02", // Gold
  },
  blueAccent: {
    100: "#4bceff", // SkyBlue
    200: "#3e7ad3", // Blue
  },

  primary: {
    // Black
    0: '#ffffff',
    100: "#d3d2d2",
    200: "#a6a5a5",
    300: "#7a7777",
    400: "#4d4a4a",
    450: "#2d3142",
    500: "#211d1d",
    600: "#1a1717",
    700: "#141111",
    800: "#0d0c0c",
    900: "#070606",
    1000: "#000000",
  },
  secondary: {
    // White + Gray
    0: "#ffffff",
    10: "#fafafa",
    30: "#f3f3f3",
    50: "#eeeeee",
    100: "#e6e6e6",
    200: "#cccccc",
    300: "#b3b3b3",
    400: "#999999",
    500: "#808080",
    600: "#666666",
    700: "#4d4d4d",
    800: "#333333",
    900: "#1a1a1a",
    1000: "#000000",
  },
};

// function that reverses the color palette
function reverseTokens(tokensDark) {
  const reversedTokens = {};
  Object.entries(tokensDark).forEach(([key, val]) => {
    const keys = Object.keys(val);
    const values = Object.values(val);
    const length = keys.length;
    const reversedObj = {};
    for (let i = 0; i < length; i++) {
      reversedObj[keys[i]] = values[length - i - 1];
    }
    reversedTokens[key] = reversedObj;
  });
  return reversedTokens;
}
export const tokensLight = reverseTokens(tokensDark);

// mui theme settings
export const themeSettings = (mode) => {
  return {
    palette: {
      mode: mode,
      ...(mode === "light"
        ? {
            // palette values for light mode
            primary: {
              ...tokensLight.primary,
              main: tokensDark.secondary[10],
              light: tokensDark.secondary[10],
            },
            secondary: {
              ...tokensLight.secondary,
              main: tokensDark.secondary[0], // Sider Title,
              light: tokensDark.secondary[500],
            },
            neutral: {
              ...tokensLight.secondary,
              main: tokensDark.secondary[0],
            },
            background: {
              default: tokensDark.secondary[0],
              alt: tokensDark.secondary[100],
            },
            button: {
              background: tokensDark.secondary[300],
              text: tokensDark.secondary[0],
            },
          }
        : {
            // palette values for dark mode
            

            primary: {
              ...tokensDark.primary,
              main: tokensDark.secondary[1000],
              light: tokensDark.secondary[900],
            },
            secondary: {
              ...tokensDark.secondary,
              main: tokensDark.secondary[0],
              light: tokensDark.secondary[100],
            },
            neutral: {
              ...tokensDark.secondary,
              main: tokensDark.secondary[0],
            },
            background: {
              default: tokensDark.secondary[900],
              alt: tokensDark.secondary[200],
            },
            button: {
              background: tokensDark.secondary[0],
              text: tokensDark.secondary[600],
            },
          }),
    },
    typography: {
      fontFamily: ["Source Sans Pro", "sans-serif"].join(","),
      fontSize: 12,
      h1: {
        fontFamily: ["Source Sans Pro", "sans-serif"].join(","),
        fontSize: 40,
      },
      h2: {
        fontFamily: ["Source Sans Pro", "sans-serif"].join(","),
        fontSize: 32,
      },
      h3: {
        fontFamily: ["Source Sans Pro", "sans-serif"].join(","),
        fontSize: 24,
      },
      h4: {
        fontFamily: ["Source Sans Pro", "sans-serif"].join(","),
        fontSize: 20,
      },
      h5: {
        fontFamily: ["Source Sans Pro", "sans-serif"].join(","),
        fontSize: 16,
      },
      h6: {
        fontFamily: ["Source Sans Pro", "sans-serif"].join(","),
        fontSize: 14,
      },
      span: {
        fontSize: 14,
        fontWeight: "normal"
      }
    },
  };
};
