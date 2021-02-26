<!-- IOS -->

detox build -c ios.sim.release -l verbose
detox test -c ios.sim.release -l verbose

 <!-- Android -->

detox build -c android.emu.release -l verbose
detox test -c android.emu.release -l verbose
