# fontIconPicker Changelog
All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](http://keepachangelog.com/en/1.0.0/)
and this project adheres to [Semantic Versioning](http://semver.org/spec/v2.0.0.html).

## [3.1.1] - 2018-04-24

### Changed

- Fix regression in `setIcons` from 3.1.
- Remove `$.isArray` in favor of `Array.isArray`.
- Add new test cases to cover the regression.

## [3.1.0] - 2018-04-24

### Added

- `setPage` API to programmatically set popup pagination.
- e2e tests with cypress.

## [3.0.0] - 2018-03-24

First release into organization from personal repo.

### Added

- `iconGenerator` option to customize icon html.
- `setIcon` API to set icons programmatically.
- `repositionPicker` API to programmatically position icon picker again.
- `searchPlaceholder` to change search input placeholder.
- Unit & Integration tests with jest.
- Build process with rollupjs and gulp along with babel, sass.

### Changed

- Use namespaced events for delegated handlers on `html` and `window` and clear
them up on `destroy`.
- Popup position adjuster function will try to align left -> alight right -> align middle, instead of align left -> align middle. This is done when viewport is small.
- Refactor source code with `ES6` modules and modern build environment.
