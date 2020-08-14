# TLDR

TLDR is an awesome Chrome extension that allows you to quickly grab text and summarize it with ease!

TLDR is an open source project created by students in collaboration during the [HackThis2020](https://hackthis.hackillinois.org/) hackathon promoted by the University of Illinois Urbana Champaign. It takes highlighted user text and displays the title, webpage, and a parsed description in an easy to read window. It first sends the highlighted text off to a Firebase server which then routes the data through a DeepAI API. After DeepAI organizes the summary it sends it back through Firebase and into the browser.

<!-- [<img src="screenshot.jpg" />](./docs/files/screenshot.jpg) -->

## Installation

**Open a shell that has git installed, navigate to the directory you wish to install TLDR, and type the following:**

`git clone https://github.com/shoeferg13/tldr-extension`.

## Configuration

**Once the repository has been cloned to your machine, you can now upload the files to chrome:**

* Open chrome and click: settings > extensions > enable developer mode
* Click on "load unpacked" and navigate to the directort where you installed TLDR.
* Select the folder "tldr-extension"
* Click extensions and make sure TLDR is pinned.
* You're all done!!

## Using The Extension

**Open up a Chrome browser window and highlight a paragraph:**

* Click the TLDR icon and the summary of the text will appear shortly after.





