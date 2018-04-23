# ember-cli-rtlcss Change Log
All notable changes to this project will be documented in this file.
This project adheres to [Semantic Versioning](http://semver.org/).

## [0.2.0]
- upgrade `ember-cli-babel` to `^6.6.0`
## [0.1.0]
- move `ember-cli-babel` to `devDependencies`
## [0.0.1]
### Added
- initial implementation as a `postprocessTree` hook that runs rtlcss on the final css files emitted into `/assets/` and outputs `<file>.rtl.css` files.
