# Downloads Organizer CLI

A Node.js command-line tool that automatically organizes your Downloads folder. It categorizes files into Documents, Images, Videos, Music, Archives, Applications, Code, and Fonts, and moves them to structured folders on your drive. Built entirely with Node.js core modules.

## Features

- Automatically detects file types by extension.
- Moves files into predefined categories: Documents, Images, Videos, Music, Archives, Applications, Code, and Fonts.
- Works on Windows operating system.
- Safe and recursive file moving with automatic folder creation.
- Handles unknown file types by placing them in an `Others` folder.

## Installation

Since this project uses only Node.js core modules, no external dependencies are required. Clone the repository and run it directly:

```bash
git clone https://github.com/DeepakRizal/organize-downloads.git
cd organize-downloads

# Create a global symlink for the CLI tool
npm link

# Use the CLI command
organise-download

By default, it organizes the current user’s Downloads folder into folders on the D: drive. You can modify the target paths inside the script if needed.
After running, you will see this message in the console:

Completed moving files into categories!
