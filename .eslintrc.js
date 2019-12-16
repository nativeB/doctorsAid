module.exports = {
    "extends": "standard",
    "rules": {
        "semi": [
            "error",
            "always"
        ],
        "camelcase": "error",
        "comma-dangle": "off",
        "indent": [
            "error",
            2
        ],
        "prefer-const": [
            "error",
            {
                "destructuring": "any",
                "ignoreReadBeforeAssign": false
            }
        ]
    }
}
