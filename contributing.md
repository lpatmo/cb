##How to contribute
Thank you for your interest in being an open-sourced contributor to CodeBuddies! Below are step-by-step instructions for getting your own fork of the CodeBuddies repo set up so that you can start making contributions to this free, open-sourced project for people interested in helping each other master code faster via virtual study groups! 

After you've got MeteorJS installed and you've forked the repo, you can make any edits that you want to the app. After you commit and push those edits to your local copy of the repo, you'd submit a pull request to the original https://github.com/lpatmo/cb repo

This document is a work-in-progress. The first draft was co-written by @wuworkshop, @sgtphips, @lpatmo, @anonregions, and @kulbida!

###Installing the repo on Nitrous.io (for PC users)
####Installing git on a Windows machine (in general)
There are two easy ways to do this:
1. Install Git for Windows (aka msysGit): http://git-scm.com/download/win The install will occur automatically.
2. Install GitHub for Windows http://windows.github.com This includes a command-line version as well as a GUI.

####Note that if you use nitrous.io, you do not need to have git installed on your windows machine in order to fork the repo. You only need a github account.
Go to https://www.nitrous.io/ (You can log in using your github account!)

1. First, you'll need to create a meteor box.

2. Click the “New Box” button on your dashboard after signing in.

3. Click on the Meteor icon to choose that box template.

4. Give the box a unique name. One related to your project would be best.

5. The region will be determined automatically.

6. After a minute or so, your box will be ready. You'll then see a box information page. Click on the IDE button to get started.

7. This is what you'll see after you click on the IDE button:
![Installfest - nitrous screenshot 1](http://codebuddies.org/images/installfest-nitrous1.png)

8. Now it's time to fork the repo!

9. Go to https://github.com/lpatmo/cb
10. Click on the "fork" button.
11. Copy and paste the URL of the github and git clone your fork of the repo. 
![Installfest - nitrous screenshot 2](http://codebuddies.org/images/installfest-nitrous2.png)

12. Now you can start up the app! ```cd``` into your cb repo and type ```meteor``` into your command line.


###Installing Git and MeteorJS on Mac
####Installing git - http://git-scm.com/download/mac - Download
After downloading git:

1. CTRL/Right Click on the ```git.pkg``` file to install

2. Open up the terminal via Applications/Utilites/Terminal or press CMD + Spacebar to bring up spotlight and type "Terminal" in the search box.

3. Type ```git --version``` in the terminal window and press ENTER - The current version of git should be displayed.
  ```git --version```
   Example: git version 2.0.1

4. Type git which to find the exact location to where it is installed.
    git which
    Example: /usr/local/git/bin/git

####Installing MeteorJS - https://www.meteor.com/install
Visit the website for installation instructions.
For those of you who are familiar with the Terminal you can simply copy and paste the following command:
curl https://install.meteor.com/ | sh

####Creating a github account - https://github.com/join
Head over to github and register for an account. It's FREE!!

####Clone A repository - If you plan to clone the repository locally for testing then open the terminal and copy paste this in followed by ENTER:
git clone https://github.com/lpatmo/cb.git 
Note: Make sure that you are in the directory that you want it downloaded to.

####Fork the repo - https://help.github.com/articles/fork-a-repo/ - for detailed instructions.

1. Visit this repo page - https://github.com/lpatmo/cb

2. Click on the "Fork" button located at the top right of the webpage.

3. ```git clone``` your repo link.

4. ```cd``` into the directory you cloned and run ```meteor``` to start the app!

5. Open up a new terminal tab and make your git commits there. 


###Installing on Linux
These instructions are based on Ubuntu 14.04.2 LTS.
1. Update your package manager. In Terminal, type the following: 
```sudo apt-get update```

2. In Terminal, install git by typing the following: 
```sudo apt-get install git```

3. Configure git to match your Github account:

```git config --global color.ui true```

```git config --global user.name "YOUR NAME"```

```git config --global user.email "YOUR@EMAIL.com"```

4. Set up authentication to GitHub from Git:
5. 
```ssh-keygen -t rsa -C "YOUR@EMAIL.com"```

5. Copy your newly generated SSH key:
6. 
```cat ~/.ssh/id_rsa.pub```

6. And paste it into your Github Settings over here: [https://github.com/settings/ssh](https://github.com/settings/ssh)

Check to see if it worked:
```ssh -T git@github.com```

8. Install Meteor:
```curl https://install.meteor.com/ | sh```

####Fork the repo - https://help.github.com/articles/fork-a-repo/ - for detailed instructions.

1. Visit this repo page - https://github.com/lpatmo/cb

2. Click on the "Fork" button located at the top right of the webpage.

3. ```git clone``` your repo link.

4. ```cd``` into the directory you cloned and run ```meteor``` to start the app!

5. Open up a new terminal tab and make your git commits there. 


##Credits
Thanks to the following people for contributing to this document:

1. [@wuworkshop](https://github.com/wuworkshop) (Linux Setup Instructions, and kudos for proposing the idea for a contributing.md document!)
2. [@sgtphips](https://github.com/sgtphips) (Mac OS X Setup Instructions)
3. [@anonRegions](https://github.com/anonRegions) and [@lpatmo](https://github.com/lpatmo)  (Nitrous.io Setup Instructions) 


