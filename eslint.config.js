import globals from "globals";
import pluginJs from "@eslint/js";
import pluginReact from "eslint-plugin-react";


export default [
  {files: ["**/*.{js,mjs,cjs,jsx}"]},
  {languageOptions: { 
      globals: globals.browser 
    },
  rules: {
      "quotes": ["error", "double"],  // enforce double quotes
      "no-console": "warn", // warn for console logs
    }
  },
  pluginJs.configs.recommended,
  pluginReact.configs.flat.recommended,
];