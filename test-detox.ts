"apps": {
  "ios": {
    "type": "ios.app",
    "binaryPath": "SPECIFY_PATH_TO_YOUR_APP_BINARY"
  },
  "android": {
    "type": "android.apk",
    "binaryPath": "SPECIFY_PATH_TO_YOUR_APP_BINARY"
  }
},
"devices": {
  "simulator": {
    "type": "ios.simulator",
    "device": {
      "type": "iPhone 11"
    }
  },
  "emulator": {
    "type": "android.emulator",
    "device": {
      "avdName": "Pixel_3a_API_30_x86"
    }
  }
},
"configurations": {
  "ios": {
    "device": "simulator",
    "app": "ios"
  },
  "android": {
    "device": "emulator",
    "app": "android"
  }
}