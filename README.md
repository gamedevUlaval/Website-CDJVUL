# CDJVUL Website

This repository host the code base for the website for the Club de développement de jeux vidéo de l'Université Laval.

## Project setup
```bash
yarn install
```

### Compiles and hot-reloads for development
```bash
yarn dev
#or
yarn start
```

### Local preview from the .dist folder
```bash
yarn preview
```

### Compiles and minifies for production
```bash
yarn build
```

### Lints files
```bash
yarn lint
```

### Lints and fixes files
```bash
yarn lint:fix
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).

## Update semantic version

You can update the version number manually or by using the GitHub action `Versioning`.

### using yarn command

To update the version number with Yarn, use the following commands:

```bash
#patch
yarn version:patch
#minor
yarn version:minor
#major
yarn version:major
```

### using Github action

To update the version number with GitHub actions:

- In the GitHub repository, go to the Actions tab.
- On the left, select the Versioning workflow.
- On the right, click Run workflow.
- Choose whether the new version is a major, minor, or patch update.
- Run the workflow on the `main` branch.
- Since the GitHub action cannot push directly to the main branch, a pull request will be created.
- Review and merge the pull request to update the version.

## Deploy the website in production
- Create a new version. Do it manually or use the Github action `Versioning`. See above section `Update semantic version` for details.
- Reset the `deploy` branch on the new version to include the change you want to deploy. 
- Push the `deploy` branch. The GitHub action will build and deploy the updated website to Github pages.

### Redirection from Ulaval website
Initially, the website was directly hosted on Laval University's servers. To enable easier releases through GitHub Pages while retaining the original FSG URL (https://gamedev.fsg.ulaval.ca), we implemented a URL redirect. This redirect ensures that visitors are always directed to https://cdjvul.github.io/Website-CDJVUL/.

In most cases, no further changes are needed for the redirect, but if updates are required, follow these steps:
- Ensure you're on campus or connected via the Laval University VPN. For VPN access, visit this page: https://www.ulaval.ca/technologies-de-linformation/connexion-au-reseau-de-luniversite
- Access the server at: https://fsg-hbw-p-cpn02.fsg.ulaval.ca:2083.
- Log in with the username gamedevfsgulaval. If you need the password, contact a club administrator.
- In the control panel, navigate to: Domains -> Redirects.
- You’ll see the current redirect at the bottom of the page, and you can add a new one using the options above.

## Adding a project to the projects page

### 1: Adding the data
You will need to add the project data to the file with all project at:
```
./src/components/projects/projects.js
``` 
The file contains a list of JavaScript objects. To add a project, include a new object with the project information. Here is an exemple of information needed to add a project:
```
{
    title: "Non du jeu",
    event: "Concours Ubisoft 20XX",
    description:"Description du jeu",
    participants: [
        "participant 1",
        "participant 2",
        ...
    ],
    mainImagePath: "projectImageFolder/mainImageName.jpg",
    imagesFolder: "projectImageFolder",
    imagesList: [
        "ImageName1.png",
        "ImageName2.png"
    ],
    gameplayTrailer: "https://www.youtube.com/embed/id"
}
```

### 2: Adding images
1. Place Project Images:
    
    Store all project images in the following directory:

```
./public/projects/projectImageFolder
```

1. Update Image List:
   
    Add the names of all images to the `imagesList` array.

2. Verify Main Image:

    Ensure the main image specified in `mainImagePath` is present in the above folder.

### 3: Adding the Youtube trailer (optional)
To embed a YouTube trailer, get the embed link:

- Visit YouTube, find your video, click Share, then Embed.
- Copy the URL from the `<iframe>` src attribute. The link usually start by: `https://www.youtube.com/embed/` 
- paste it into `gameplayTrailer` in the project object.
