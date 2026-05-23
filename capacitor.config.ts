import type { CapacitorConfig } from "@capacitor/cli";

const config: CapacitorConfig = {
  appId: "com.ciekawostkomania.app",
  appName: "CiekawostkoMania",
  webDir: "dist-cap",
  server: {
    androidScheme: "https",
  },
};

export default config;
