<!-- IOS -->

detox build -c ios.sim.release -l verbose
detox test -c ios.sim.release -l verbose

 <!-- Android -->

detox build -c android.emu.release -l verbose
detox test -c android.emu.release -l verbose

<!-- LINKS -->

Detox Setup
https://dev.to/jeevankishore/e2e-detox-react-native-161o

Detox github actions
https://dev.to/edvinasbartkus/running-react-native-detox-tests-for-ios-and-android-on-github-actions-2ekn
