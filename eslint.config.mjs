// eslint.config.mjs
export default [
  {
    ignores: ["node_modules", ".next"],
  },
  {
    rules: {
      // Disable build-breaking rules here:
      "react/no-unescaped-entities": "off",
      "@next/next/no-img-element": "off",
    },
  },
];
