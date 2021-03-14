# gatsby-plugin-customerly-chat

Add [Customerly Livechat](https://customerly.io/) to your Gatsby site.

## ⚙️ Install

### Using npm 

Run `npm install --save gatsby-plugin-customerly-chat`

### Using yarn

Run `yarn add gatsby-plugin-customerly-chat`

## 🚀 How to use

To integrate Customerly Livechat to your Gatsby site, you need to have an account with Customerly. [Sign up here](https://customerly.io/).

```javascript
// gatsby-config.js
plugins: [
  {
    resolve: 'gatsby-plugin-customerly-chat',
    options: {
      appId: 'YOUR_CUSTOMERLY_APP_ID',
      includeInDevelopment: true,
    }
  }
]
```

### Configuration

- `appId` - Required. Your Customerly application ID
- `includeInDevelopment` - Optional. Defaults to `false`

Restart your Gatsby server for the plugin to take effect.

## 🙋 Contributing
If you have improvements that you'd like to see, or encounter any bugs, feel free to [create an issue](https://github.com/Customerly/gatsby-plugin-customerly-chat/issues). Alternatively, please open a PR, and make sure that the new code is properly tested and all the steps.

We follow the [Conventional Commits specification](https://www.conventionalcommits.org/en/v1.0.0/).

