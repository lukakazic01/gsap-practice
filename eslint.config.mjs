import withNuxt from "./.nuxt/eslint.config.mjs";

export default withNuxt(
  {
    ignores: ["node_modules", ".nuxt", ".output", "dist"],
    rules: {
      "@stylistic/max-len": ["error", { code: 160, ignorePattern: "d=\"[^\"]*\"" }],
      "vue/max-attributes-per-line": "off",
      "vue/html-self-closing": "off",
      "brace-style": ["error", "1tbs"],
      "@stylistic/brace-style": "off",
      "vue/multiline-html-element-content-newline": "off",
      "vue/singleline-html-element-content-newline": "off",
      "no-console": ["error"],
      "vue/no-multi-spaces": ["error", {
        ignoreProperties: false,
      }],
      "vue/multi-word-component-names": "off",
    },
  },
);
