/** @type {import("prettier").Options} */
module.exports = {
  bracketSpacing: true,
  semi: true,
  trailingComma: "all",
  printWidth: 150,
  tabWidth: 2,
  importOrder: [
    "^(next/(.*)$)|^(next$)",
    "^(react/(.*)$)|^(react$)",
    "<THIRD_PARTY_MODULES>",
    "^@/components/(.*)$|^components/(.*)$",
    "^@/lib/(.*)$",
    "^@/utils/(.*)$",
    "^@/styles/(.*)$",
    "^[./]",
  ],
  importOrderSeparation: false,
  importOrderSortSpecifiers: true,
  plugins: ['prettier-plugin-tailwindcss'],
  tailwindConfig: "./tailwind.config.js",
};
