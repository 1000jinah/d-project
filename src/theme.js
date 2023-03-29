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
    100: "#e8e8e8",
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

export const tokens = (mode) => ({
  ...(mode === "dark"
    ? {
        grey: {
          100: "#e0e0e0",
          200: "#c2c2c2",
          300: "#a3a3a3",
          400: "#858585",
          500: "#666666",
          600: "#525252",
          700: "#3d3d3d",
          800: "#292929",
          900: "#141414",
        },
        primary: {
          100: "#d0d1d5",
          200: "#a1a4ab",
          300: "#727681",
          400: "#1F2A40",
          500: "#141b2d",
          600: "#101624",
          700: "#0c101b",
          800: "#080b12",
          900: "#040509",
        },
        greenAccent: {
          100: "#dbf5ee",
          200: "#b7ebde",
          300: "#94e2cd",
          400: "#70d8bd",
          500: "#4cceac",
          600: "#3da58a",
          700: "#2e7c67",
          800: "#1e5245",
          900: "#0f2922",
        },
        redAccent: {
          100: "#f8dcdb",
          200: "#f1b9b7",
          300: "#e99592",
          400: "#e2726e",
          500: "#db4f4a",
          600: "#af3f3b",
          700: "#832f2c",
          800: "#58201e",
          900: "#2c100f",
        },
        blueAccent: {
          100: "#e1e2fe",
          200: "#c3c6fd",
          300: "#a4a9fc",
          400: "#868dfb",
          500: "#6870fa",
          600: "#535ac8",
          700: "#3e4396",
          800: "#2a2d64",
          900: "#151632",
        },
      }
    : {
        grey: {
          100: "#141414",
          200: "#292929",
          300: "#3d3d3d",
          400: "#525252",
          500: "#666666",
          600: "#858585",
          700: "#a3a3a3",
          800: "#c2c2c2",
          900: "#e0e0e0",
        },
        primary: {
          100: "#040509",
          200: "#080b12",
          300: "#0c101b",
          400: "#f2f0f0", // manually changed
          500: "#141b2d",
          600: "#1F2A40",
          700: "#727681",
          800: "#a1a4ab",
          900: "#d0d1d5",
        },
        greenAccent: {
          100: "#0f2922",
          200: "#1e5245",
          300: "#2e7c67",
          400: "#3da58a",
          500: "#4cceac",
          600: "#70d8bd",
          700: "#94e2cd",
          800: "#b7ebde",
          900: "#dbf5ee",
        },
        redAccent: {
          100: "#2c100f",
          200: "#58201e",
          300: "#832f2c",
          400: "#af3f3b",
          500: "#db4f4a",
          600: "#e2726e",
          700: "#e99592",
          800: "#f1b9b7",
          900: "#f8dcdb",
        },
        blueAccent: {
          100: "#151632",
          200: "#2a2d64",
          300: "#3e4396",
          400: "#535ac8",
          500: "#6870fa",
          600: "#868dfb",
          700: "#a4a9fc",
          800: "#c3c6fd",
          900: "#e1e2fe",
        },
      }),
});