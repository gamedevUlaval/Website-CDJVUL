import js from "@eslint/js";
import pluginVue from 'eslint-plugin-vue'

export default [
  js.configs.recommended,
  ...pluginVue.configs['flat/recommended'],
  {
    languageOptions: {
      globals: {
        __APP_VERSION__: "readonly"
      }
    }
  }
];