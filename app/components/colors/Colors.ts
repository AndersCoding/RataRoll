export type Colors = {
    text: string;
    background: string;
};

export const lightColors: Colors = {
  text: "#000000",
  background: "#FFFFFF",
};

export const darkColors: Colors = {
  text: "#FFFFFF",
  background: "#000000",
};

export const getColors = (scheme: "light" | "dark" | null): Colors => {
  return scheme === "dark" ? darkColors : lightColors;
};