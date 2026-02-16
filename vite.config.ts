import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import { viagen } from "viagen";

// https://vite.dev/config/
export default defineConfig({
  plugins: [viagen(), react()],
});
