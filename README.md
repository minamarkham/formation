<h1 align="center">
    <a name="top" title="">~/.&nbsp;🐝</a><br/>formation<br/>
    <sup><sub>made by  <a href="https://www.chezmoi.io/">mina</a>.</sub></sup>
</h1>

<div align="center">

![Let's get in formation](./docs/formation.gif)
<br/>

[![Codacy rating][badge-codacy]][link-codacy]
[![CodeFactor rating][badge-codefactor]][link-codefactor]
[![License][badge-license]][LICENSE]
[![Repo analytics][badge-analytics]][link-analytics]

<p>Formation is a shell script to set up a macOS laptop for design and development.</p>

<p>It can be run multiple times on the same machine safely. It installs, upgrades, or skips packages based on what is already installed on the machine.</p>

<p><strong>Be sure to <a href="#" title="star">⭐️</a> or <a href="#" title="fork">🔱</a> this repo if you find it useful! 😃</strong></p>
</div>

![Screenshot of macOS Scripted Setup in action](./docs/demo.png?raw=true)

## prerequisites
none. the script will install everything you need.

## install

Download the script:

```sh
git clone git@github.com/minamarkham/formation.git && cd formation
```

Review the script (please don't run scripts you don't understand):

```sh
less slay
```

Slay:

```sh
cd formation && ./slay
```

If you can't run the script, you might have to change its attributes. Just do:

```
chmod +x ./slay
```

:warning: Warning: I advise against running [this script](slay) unless you understand what it’s doing to your computer. I created this based on my own preferences; your mileage may vary. Once the script is done, quit and relaunch Terminal. It is highly recommended to run the script regularly to keep your computer up to date.

Your last Formation run will be saved to `~/slay.log`. To review it, run `less ~/slay.log`.

That's it! :sparkles:

<div align="right"><sup><a href="#top">⬆ back to top</a></sup></div>

## toolset
The setup process will install:

### 🚀 productivity apps
- [Airtable](https://airtable.com/) database management
- [Bartender](https://www.macbartender.com/) menu bar organizer
- [CleanMyMac](https://macpaw.com/cleanmymac) system optimizer & cleaner
- [Fantastical](https://flexibits.com/fantastical) calendar app
- [Loop](https://www.loop.app/) habit tracker & productivity manager
- [Notion](https://www.notion.so/) notes & productivity platform
- [Obsidian](https://obsidian.md/) markdown-based knowledge management
- [Raycast](https://www.raycast.com/) quick launcher & productivity booster

### 🛠 development apps
- [ImageOptim](https://imageoptim.com/mac) image optimizer
- [Kaleidoscope](https://www.kaleidoscopeapp.com/) diff tool
- [Sequel Ace](https://sequel-ace.com/) SQL client
- [Visual Studio Code](https://code.visualstudio.com/) IDE
- [Warp](https://www.warp.dev/) modern terminal emulator

### 🎨 design apps
- [Affinity Designer](https://affinity.serif.com/en-us/designer/)
- [Affinity Photo](https://affinity.serif.com/en-us/photo/)
- [Darkroom](https://darkroom.co/) photo editor
- [Figma](https://www.figma.com/) interface design & prototyping tool
- [FontBase](https://fontba.se/) font manager
- [Image2icon](https://img2icnsapp.com/) icon generator

### 📢 communication apps
- [Discord](https://discord.com/) community & voice chat
- [Zoom](https://zoom.us/) video conferencing

### ⚙️ utility apps
- [1Password](https://1password.com/) password manager
- [Backblaze](https://www.backblaze.com/) cloud backup
- [Dropbox](https://www.dropbox.com) cloud storage
- [Hazel](https://www.noodlesoft.com/) automated file organizer
- [Raindrop.io](https://raindrop.io/) bookmark manager
- [Twingate](https://www.twingate.com/) secure remote access

### 🎭 multimedia apps
- [HandBrake](https://handbrake.fr/) video transcoder
- [Plex](https://www.plex.tv/) media server & streaming
- [Spotify](https://www.spotify.com/) music streaming

### 🌐 web browsers & extensions
- [Firefox](https://www.mozilla.org/en-US/firefox/new/) alternative browser
- [Hush](https://oblador.github.io/hush/) content blocker & privacy extension

### 🛒 shopping & social
- [Friendly Shopping](https://friendly.io/shopping) shopping browser
- [Friendly Social](https://friendly.io/social) social media app
- [Friendly Streaming](https://friendly.io/streaming) streaming service client

### 🧑‍🍳 miscellaneous
- [Gemini 2](https://macpaw.com/gemini) duplicate file finder
- [Paprika Recipe Manager](https://www.paprikaapp.com/) recipe organizer

### 📦 cli & developer tools
- [`asciinema`](https://asciinema.org/) terminal session recorder
- [`chezmoi`](https://www.chezmoi.io/) dotfiles manager
- [`eza`](https://github.com/eza-community/eza) enhanced `ls`
- [`ffmpeg`](https://ffmpeg.org/) multimedia processor
- [`flyctl`](https://fly.io/docs/flyctl/) Fly.io CLI tool
- [`git`](https://git-scm.com/) distributed version control
- [`httpie`](https://httpie.io/) HTTP client
- [`jq`](https://stedolan.github.io/jq/) JSON processor
- [`lazygit`](https://github.com/jesseduffield/lazygit) Git terminal UI
- [`mas`](https://github.com/mas-cli/mas) Mac App Store CLI
- [`micro`](https://micro-editor.github.io/) modern CLI text editor
- [`starship`](https://starship.rs/) cross-shell prompt
- [`tig`](https://jonas.github.io/tig/) text-based Git interface
- [`vhs`](https://github.com/charmbracelet/vhs) CLI screencast creator
- [`watchman`](https://facebook.github.io/watchman/) file watching service
- [`wget`](https://www.gnu.org/software/wget/) file downloader
- [`zoxide`](https://github.com/ajeetdsouza/zoxide) smarter `cd` command

### 📦 npm packages
- [`corepack`](https://github.com/nodejs/corepack) package manager bootstrapper
- [`netlify-cli`](https://github.com/netlify/cli) netlify cli tool
- [`sass-migrator`](https://www.npmjs.com/package/sass-migrator) sass migration tool

### 🔌 vscode extensions *(selected highlights)*
- [Yoncé](https://marketplace.visualstudio.com/items?itemName=minamarkham.yonce-theme) colorful, high-contrast color theme
- [Material Icon Theme](https://marketplace.visualstudio.com/items?itemName=pkief.material-icon-theme) colorful icons
- [Auto Close Tag](https://marketplace.visualstudio.com/items?itemName=formulahendry.auto-close-tag) auto-close HTML/XML tags
- [Auto Rename Tag](https://marketplace.visualstudio.com/items?itemName=formulahendry.auto-rename-tag) sync rename tags
- [Better Comments](https://marketplace.visualstudio.com/items?itemName=aaron-bond.better-comments) readable comments
- [Color Highlight](https://marketplace.visualstudio.com/items?itemName=naumovs.color-highlight) inline color preview
- [EmojiSense](https://marketplace.visualstudio.com/items?itemName=bierner.emojisense) emoji autocomplete
- [ESLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint) JS linting
- [GitHub Copilot](https://marketplace.visualstudio.com/items?itemName=github.copilot) AI code assistant
- [GitLens](https://marketplace.visualstudio.com/items?itemName=eamodio.gitlens) Git integration
- [Gremlins](https://marketplace.visualstudio.com/items?itemName=nhoizey.gremlins) hidden character detection
- [Highlight Matching Tag](https://marketplace.visualstudio.com/items?itemName=vincaslt.highlight-matching-tag) highlight paired tags
- [Indenticator](https://marketplace.visualstudio.com/items?itemName=sirtori.indenticator) indentation visualization
- [IntelliCode](https://marketplace.visualstudio.com/items?itemName=visualstudioexptteam.vscodeintellicode) AI autocomplete
- [Markdown Emoji](https://marketplace.visualstudio.com/items?itemName=bierner.markdown-emoji) emoji shortcuts
- [Path Intellisense](https://marketplace.visualstudio.com/items?itemName=christian-kohler.path-intellisense) auto-complete paths
- [Polacode](https://marketplace.visualstudio.com/items?itemName=pnp.polacode) code screenshots
- [Prettier](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode) code formatter
- [Stylelint](https://marketplace.visualstudio.com/items?itemName=stylelint.vscode-stylelint) css linting
- [Trailing Spaces](https://marketplace.visualstudio.com/items?itemName=shardulm94.trailing-spaces) remove extra spaces

<sub>See [`swag`](swag) for the full list of apps that will be installed. Adjust it to your personal taste.</sub>

It should take less than 20 minutes to install (depends on your machine).

<div align="right"><sup><a href="#top">⬆ back to top</a></sup></div>

## `~/.hot-sauce` 🌶

![I got hot sauce in my bag](./docs/hot-sauce.gif)

Your `~/.hot-sauce` is added at the end of the Formation script. Put your customizations there.
For example:

```sh
#!/usr/bin/env zsh

hotsauce() {
  # Add your customizations here
}

# run command
hotsauce

exit 0
```

Write your customizations such that they can be run safely more than once.
See the [`slay`](slay) script for examples.

Formation functions such as `step` and `log_message` can be used in your `~/.hot-sauce`.

<div align="right"><sup><a href="#top">⬆ back to top</a></sup></div>

## known issues
Cask does not recognize applications installed outside of Homebrew Cask – in the case that the script fails, you can either remove the application from the install list or uninstall the application causing the failure and try again.

<div align="right"><sup><a href="#top">⬆ back to top</a></sup></div>

## acknowledgements

Inspiration and code was taken from many sources, including:

* Mathias Bynens' [dotfiles](https://github.com/mathiasbynens/dotfiles)
* thoughtbot's [laptop](https://github.com/thoughtbot/laptop/)
* Swiss-Mac-User's [macOS Scripted Setup](https://github.com/Swiss-Mac-User/macOS-scripted-setup/)
* Izzy Gomez's [brew installs](https://github.com/izzygomez/mac-setup/blob/main/brew-installs.sh)
* [macOS defaults](https://macos-defaults.com/) - Uncomplete list of macOS `defaults` commands with demos.

<div align="right"><sup><a href="#top">⬆ back to top</a></sup></div>

## license

Formation is customized for my own needs. It is free software, and may be redistributed under the terms specified in the [LICENSE] file.

<div align="right"><sup><a href="#top">⬆ back to top</a></sup></div>

<p align="center"><strong>Don't forget to <a href="#" title="star">⭐️</a> or <a href="#" title="fork">🔱</a> this repo! 😃<br/><sub>made with <b title="love">❤️</b> in oakland.</sub></strong></p>


[badge-license]:https://img.shields.io/github/license/minamarkham/formation
[LICENSE]: LICENSE

[badge-analytics]:https://img.shields.io/badge/repo%20analytics-public-informational
[link-analytics]:https://repo-analytics.github.io/minamarkham/formation

[badge-codacy]:https://app.codacy.com/project/badge/Grade/30eb39e1eb414295bcc3713755d57b1a
[link-codacy]:https://app.codacy.com/gh/minamarkham/formation/dashboard

[badge-codefactor]:https://img.shields.io/codefactor/grade/github/minamarkham/formation?logo=codefactor&logoColor=white&cacheSeconds=300
[link-codefactor]:https://www.codefactor.io/repository/github/minamarkham/formation
