import Step from './components/Step';
import Step1 from './images/image1.png';
import Step2 from './images/image2.png';
import Step3 from './images/image3.png';
import Step4 from './images/image4.png';
import Step5 from './images/image5.png';
import Step6 from './images/image6.png';
import Step7 from './images/image7.png';
import Step8 from './images/image8.png';
import Step9 from './images/image9.png';



import Challenge from './components/Challenge';

import './App.css';

function App() {
  return (
    <div>
      <h1 className='title-page'>Lab 10 - Problem 3: Working With ReactJS</h1>
      <h2>How to Install the Framework and Build the Page</h2>
      <Step 
        stepImage = {Step1}
        stepHeading = "Step 1:"
        stepDescription = "Download Node JS."
      />
      <Step 
        stepImage = {Step2}
        stepHeading = "Step 2:"
        stepDescription = "After downloading Node JS, check to see if it is in the PC."
      />
      <Step 
        stepImage = {Step3}
        stepHeading = "Step 3:"
        stepDescription = "Set up a new React project using the following command: npx create-react-app lab10c"
      />
      <Step 
        stepImage = {Step4}
        stepHeading = "Step 4:"
        stepDescription = "Start the development server in the newly created project folder with the following command: npm start. The React project is now running on a localhost server."
      />
      <Step 
        stepImage = {Step5}
        stepHeading = "Step 5:"
        stepDescription = "Design the web page and implement the components."
      />
      <Step 
        stepImage = {Step6}
        stepHeading = "Step 6:"
        stepDescription = "Add the components to the page, which is in App.js."
      />
      <Step 
        stepImage = {Step7}
        stepHeading = "Step 7:"
        stepDescription = "Add the styles to the CSS files."
      />
      <Step 
        stepImage = {Step8}
        stepHeading = "Step 8:"
        stepDescription = "Push the React app to Github."
      />
      <Step 
        stepImage = {Step9}
        stepHeading = "Step 9:"
        stepDescription = "Deploy the React app with Netlify through Github."
      />
      <h2>The Diffculties Encountered and How to Solve Them</h2>
      <Challenge
        challengeHeading = "Challenge 1:"
        challengeDescription = "Learing React JS as a beginner."
        challengeSolution = "Reading documentations and watching online tutorials about React JS."
      />
      <Challenge
        challengeHeading = "Challenge 2:"
        challengeDescription = "How to design the Web Page with React JS."
        challengeSolution = "Working with React apps is similar to building Lego pieces, because we can create components and build the app with them. Thus, knowing how to devide the web page into components is important when working with React."
      />
      <Challenge
        challengeHeading = "Challenge 3:"
        challengeDescription = "How to deploy the site."
        challengeSolution = "Netlify is a platform that helps deploying React apps with simple steps."
      />
      <Challenge
        challengeHeading = "Challenge 4:"
        challengeDescription = "Learning Github as a beginner."
        challengeSolution = "Reading documentations and watching online tutorials about Github."
      />
    </div>
  );
}

export default App;
