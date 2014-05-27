#Mozilla Docs

## Requirements

* [node.js](http://nodejs.org/)
* npm

## Installation

The following instructions are intended to be run from a command line.

1. Clone mozilla-docs: `git clone git@github.com:darrinhenein/mozilla-docs.git`.
2. Create a new folder outside of mozilla-docs that will store your project.
3. Change directories into your new project: `cd <path/to/project>`.
4. Run `npm install <path/to/mozilla-docs>` inside of your project folder.
5. Run `npm install -g <path/to/mozilla-docs>` to add the `mozdoc` cli to your
path.

## Usage

Put markdown files into a `documents/` folder inside your project folder.
Images should be placed into `images/`.

1. Run `mozdoc serve` to preview your doc and serve a live copy locally.
2. Run `mozdoc build` to build a production ready `build/` directory.
