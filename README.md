This is a Posko Apps

# Getting Started

> **Note**: Make sure you have completed the [React Native - Environment Setup](https://reactnative.dev/docs/environment-setup) instructions till "Creating a new application" step, before proceeding.

# Step 1: You need generate Google API Key

First, you will need generate Google API Key [Google Cloud](https://console.cloud.google.com/project/_/google/maps-apis/credentials?utm_source=Docs_Credentials&hl=id&_gl=1*13ljw84*_ga*MzY3NjczNTE0Ny4xNzA2Nzk0NjI4*_ga_NRWSTWS78N*MTcxMTMxODc4MS4zLjEuMTcxMTMxODc4Ni4wLjAuMA..).

After you got Google API Key, you need put in

- android/app/src/main/AndroidManifest.xml (find YOUR_GOOGLE_API_KEY)
- src/config/constants

## Step 2: Start the Metro Server

Second, you will need to start **Metro**, the JavaScript _bundler_ that ships _with_ React Native.

To start Metro, run the following command from the _root_ of your React Native project:

```bash
# using npm
npm start

# OR using Yarn
yarn start
```

## Step 2: Start your Application

Let Metro Bundler run in its _own_ terminal. Open a _new_ terminal from the _root_ of your React Native project. Run the following command to start your _Android_ or _iOS_ app:

### For Android

```bash
# using npm
npm run android

# OR using Yarn
yarn android
```

### For iOS

```bash
# using npm
npm run ios

# OR using Yarn
yarn ios
```

If everything is set up _correctly_, you should see your new app running in your _Android Emulator_ or _iOS Simulator_ shortly provided you have set up your emulator/simulator correctly.

This is one way to run your app — you can also run it directly from within Android Studio and Xcode respectively.

## Congratulations! :tada:

You've successfully run Posko App. :partying_face:

# Posko Apk

You can download from [Posko Apk](https://drive.google.com/drive/folders/18s4TKE8fSd2PxnBsyyZcD5X_v_FTyHtX?usp=sharing).
