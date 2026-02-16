export type Brand = "corporate" | "neo";
export type Theme = "light" | "dark";

export type UIIdentity = {
  brand: Brand;
  theme: Theme;
};

export const DEFAULT_IDENTITY: UIIdentity = {
  brand: "corporate",
  theme: "light",
};