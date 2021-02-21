DOCS for fastlane on android:

1. in root /android create `.local-properties`
   with path to anroid sdk. For MAC: sdk.dir = /Users/bartlomiejb/Library/Android/sdk

2. For MAC: manage your Ruby environment via `rbenv` -> instal ruby version 2.7.2 and use it globally
   check in terminal output for : `ruby -v`
   // ruby 2.7.2p137 (2020-10-01 revision 5445e04352)

3. Install bundler -> `gem install bundler`

4. `bundle install` to install ruby packages

5. Run lanes: `bundle exec fastlane android [lane]`
