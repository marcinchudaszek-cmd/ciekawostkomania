import type { CapacitorConfig } from "@capacitor/cli";

const config: CapacitorConfig = {
  appId: "com.ciekawostkomania.app",
  appName: "CiekawostkoMania",
  webDir: "dist-cap",
  // Tło WebView przed wczytaniem strony — bez tego przy starcie miga biel
  backgroundColor: "#1a1a2e",
  server: {
    androidScheme: "https",
  },
};

export default config;
