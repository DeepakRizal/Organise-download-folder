#Downloads Organizer CLI
A Node.js command-line tool that automatically organizes your Downloads folder. It categorizes files into Documents, Images, Videos, Music, Archives, Applications, Code, and Fonts, and moves them to structured folders on your drive. Built with Node.js core modules.

#Features
1.Automatically detects file types by extension.
2.Moves files into predefined categories: Documents, Images, Videos, Music, Archives, Applications, Code, and Fonts.
3.Works on  operating system (Windows).
4.Safe and recursive file moving with automatic folder creation.
5.Handles unknown file types by placing them in an Others folder.

 # Installation
**Since this project uses only Node.js core modules, no external dependencies are required. You can clone the repository and run it directly
1.git clone https://github.com/DeepakRizal/organize-downloads.git
2.cd organize-downloads

# Usage
**Run the script using Node.js:
1) npm link(This tells npm: "create a global symlink for this CLI tool.")
2) organise-download use this command 
By default, it will organize the current user’s Downloads folder into folders on the D: drive. You can modify the target paths inside the script if needed.

you will see this message in the console "Completed moving files into categories!"

# Project Structure
organize-downloads/
1.├─ index.js           # Main CLI script
2.├─ extensions.js      # File type definitions
3.└─ README.md          # Project documentation


