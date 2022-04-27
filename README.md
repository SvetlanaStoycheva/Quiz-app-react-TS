#### Quiz-app with React/TypeScript

#### [tutorial>>>](https://www.youtube.com/watch?v=SdOtuCdTdq8&list=WL&index=47&t=1702s)

#### [see project]()

- Quiz app that uses [Trivia Api](https://opentdb.com/api_config.php)

###### For Netlify upload

- in package.json => in "scripts": => "build": "CI= react-scripts build"
- in public => create new file \_redirects and inside: /\* /index.html 200

#### Challenges

1. I had a problem with the global uninstall of the old create-react-app version.

- First run in the computer terminal (I think that solve the problem):
  - npm install create-react-app
  - npx create-react-app project-name.
- Then: npx create-react-app my-app --template typescript

2. Error "Cannot use JSX unless the '--jsx' flag is provided"

- Adding "jsx": "preserve" to tsconfig.json will bypass the warning

<p align-items: center>
    <img src='./readme-images/Screenshot-image_01.png' width='250'>
</p>
<br/>
<p align-items: center>
    <img src='./readme-images/Screenshot-image_02.png' width='250'>
</p>
<br/>
