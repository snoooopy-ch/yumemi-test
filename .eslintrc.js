module.exports = {
    "root": true,
    "env": {
        "browser": true,
        "es2021": true,
        "node": true
    },
    "extends": [
        "eslint:recommended",
        "plugin:vue/vue3-essential",
        "plugin:@typescript-eslint/recommended",
        "@nuxtjs/eslint-config-typescript", // https://qiita.com/kentarou_masuda/items/c0180fe383b01ba54cbf
        "plugin:nuxt/recommended",
        "prettier"
    ],
    "overrides": [
    ],
    "parser": "@typescript-eslint/parser",
    "parserOptions": {
        "ecmaVersion": "latest",
        "sourceType": "module",
        "parser": "@typescript-eslint/parser", // https://qiita.com/kentarou_masuda/items/c0180fe383b01ba54cbf
    },
    "plugins": [
        "vue",
        "@typescript-eslint"
    ],
    "rules": {
    }
}
