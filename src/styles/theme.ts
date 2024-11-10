export default {
  colors: {
    white: "#ffffff",
    cajuOrange: "#FF7500",
    cajuRed: "#E80537",
    cajuTeal: "#007c89",
    cajuGreenMint: "#64a98c",
    cajuLightBlueGray: "#959DA533",
    cajuSoftPink: "#FF919A",
    cajuPastelGreen: "#9BE59B",
    cajuCoralOrange: "#FF8858",
    cajuGray: "#aeaeae",
    cajuSoftGray: "#dadada",
    cajuBlack: "#2a2a2a",
    cajuLightBeige: "#FDF8E9",
    cajuGoldenYellow: "#EFC24D",
    cajuSoftLilac: "#EEEEFD",
    cajuDeepBlue: "#4242DF",
    cajuPalePink: "#FBEDF6",
    cajuBrightPink: "#CE2893",
  },
  spacings: {
    off: "0px",
    xxs: "2px",
    xs: "4px",
    s: "6px",
    sm: "8px",
    md: "16px",
    lg: "32px",
    custom: (n: number): string => `${n * 2}px`,
  },
  fontWeights: {
    regular: 400,
    medium: 500,
    bold: 600,
    extraBold: 700,
  },
  borderRadius: {
    buttom: "4px",
  },
  typography: {
    xxs: "8px",
    xs: "10px",
    sm: "12px",
    md: "14px",
    lg: "16px",
    xl: "24px",
    custom: (n: number): string => `${n * 2}px`,
  },
  border: {
    sm: "2px",
    md: "4px",
    lg: "8px",
    custom: (n: number): string => `${n * 2}px`,
  },
  size: {
    icon: {
      lg: "32px",
      md: "24px",
      sm: "16px",
      xs: "12px",
    },
    button: {
      md: "40px",
      sm: "36px",
      xs: "24px",
    },
    custom: (n: number): string => `${n * 2}px`,
  },
  padding: {
    button: {
      md: "12px 16px",
      sm: "11px 12px",
      xs: "6px 8px",
    },
    listItem: "2px 8px",
  },
  fontSize: {
    title: {
      1: "50px",
      2: "40px",
      3: "24px",
      4: "18px",
    },
    body: {
      lg: "16px",
      md: "14px",
      sm: "12px",
      xs: "10px",
    },
    label: {
      md: "10px",
      sm: "8px",
    },
  },
  lineHeight: {
    title: {
      1: "60px",
      2: "48px",
      3: "28px",
      4: "21px",
    },
    body: {
      lg: "23px",
      md: "18px",
      sm: "14px",
      xs: "12px",
    },
    label: {
      md: "12px",
      sm: "10px",
    },
  },
};
