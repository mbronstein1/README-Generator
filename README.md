# README GENERATOR CHALLENGE 9

## Description
This is the ninth challenge in the Northwestern Coding Bootcamp (Module 9). We were expected to create a generator for a professional README so a user could pass information through the CLI and render a professional README.md file with a title, table of contents, description, installation tips, usage tips, contribution how-to, licenses (if wanted), testing recommendations, and questions section. We also needed to render a badge for the chosen license at the top of the page.

We used the built-in "File System" npm through node, as well as a third-party npm for allowing user input, "Inquirer". All coding was done in .js files and written into a .md file after input has been taken. Look at "Sample_README.md" for a sample of a readme file created with the generator.

## Link to video walkthrough
[Live Video Walkthrough](https://www.youtube.com/watch?v=qsF40H9VIBM)

## Screenshot
![Webpage Screenshot](./images/Screen%20Shot%202022-09-22%20at%205.25.53%20PM.png)
![Webpage Screenshot](./images/Screen%20Shot%202022-09-22%20at%205.26.21%20PM.png)
![Webpage Screenshot](./images/Screen%20Shot%202022-09-22%20at%205.26.36%20PM.png)
![Webpage Screenshot](./images/Screen%20Shot%202022-09-22%20at%205.26.59%20PM.png)

## User Story

```md
AS A developer
I WANT a README generator
SO THAT I can quickly create a professional README for a new project
```

## Acceptance Criteria

```md
GIVEN a command-line application that accepts user input
WHEN I am prompted for information about my application repository
THEN a high-quality, professional README.md is generated with the title of my project and sections entitled Description, Table of Contents, Installation, Usage, License, Contributing, Tests, and Questions
WHEN I enter my project title
THEN this is displayed as the title of the README
WHEN I enter a description, installation instructions, usage information, contribution guidelines, and test instructions
THEN this information is added to the sections of the README entitled Description, Installation, Usage, Contributing, and Tests
WHEN I choose a license for my application from a list of options
THEN a badge for that license is added near the top of the README and a notice is added to the section of the README entitled License that explains which license the application is covered under
WHEN I enter my GitHub username
THEN this is added to the section of the README entitled Questions, with a link to my GitHub profile
WHEN I enter my email address
THEN this is added to the section of the README entitled Questions, with instructions on how to reach me with additional questions
WHEN I click on the links in the Table of Contents
THEN I am taken to the corresponding section of the README
```
