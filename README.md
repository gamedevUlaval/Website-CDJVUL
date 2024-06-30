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

### Update website version
```bash
#patch
yarn version:patch
#minor
yarn version:minor
#major
yarn version:major
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).

## Deploy the website in production
- Create a new version using the Github `Versioning` action.
- Reset the `deploy` branch on the new version to include the change you want to deploy. 
- Push the `deploy` branch. The GitHub action will build and deploy the updated website to Github pages.

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
    gameplayTrailer: "https://www.youtube.com/embed/id"
}
```

### 2: Adding images
Place project images in:

```
./src/assets/projects/projectImageFolder
```
Ensure the main image specified in mainImagePath exists in this folder.

### 3: Adding the Youtube trailer (optional)
To embed a YouTube trailer, get the embed link:

- Visit YouTube, find your video, click Share, then Embed.
- Copy the URL from the `<iframe>` src attribute. The link usually start by: `https://www.youtube.com/embed/` 
- paste it into `gameplayTrailer` in the project object.
