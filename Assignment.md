<p align="center">
  <img src="https://s3-ap-southeast-1.amazonaws.com/asia.urbanpiper.com/static/frontend/images/logo.svg" alt="UrbanPiper" width="226">
</p>

<p align="center">A Short Assignment for Frontend Engineers</p>

## Why an assignment?
We believe that the best way to understand the capability of a programmer is to see their work. 
Moreover, "work" is not just about how you can string together a bunch of nifty statements to produce a desired result—it encompasses the thought you put in to structure your application, the effort you put in to write out comments in your code and commits to help your collaborators, 
the tests you write to make your code resilient and they way you document your approach around components that you build out. 
A resumé usually falls woefully short on providing a clear insight into all this. 

The only reason we want you to try out this assignment is because it should be _fun_, and also, 
it helps us structure our conversations with you going forward. If you feel that you have sufficient work in the 
public domain for us to go through, feel free to skip this assignment and let us know. 
Still, if you feel curious enough to take a shot at it, well, let's get started...

## The Story
A long time ago in a galaxy far, far away...

It is a period of civil war. Rebel spaceships, striking from a hidden base, have won their first victory against the evil Galactic Empire.

During the battle, rebel spies manageed to steal secret plans to the Empire's ultimate weapon. Rather oddly these plans contain
blueprints for a UI component to search for Star Wars characters by name. Perplexed, the Rebel Command decides to build this for themselves.

You are tasked with building this component to help the rebels restore freedom to the galaxy...

## The Assignment
This repository contains a basic scaffolding of a React app. We have purposefully kept the dependencies to a minimum, 
it is by no means supposed to be a limitation. You can go ahead and introduce any library/software system that you 
feel will help you create a better solution. However please make sure you do not use an external library for the Search component itself. This is a core part of the assignment and we expect you to implement it yourself.

You can make use of the publicly accessible API Service — [Star Wars API — SWAPI](https://swapi.dev/). Use the `/people/` endpoint to search for characters.

We have included designs for the component in the repository. Stick close to the given designs, but if you feel like some aspect can be improved
please feel free to do so. We would love to discuss that in the discussions that follow.

<p align="center">
  <img src="https://user-images.githubusercontent.com/1500309/87780788-0a5b1600-c84d-11ea-8209-6873be1f8b26.png" alt="Readme Image">
</p>

## Installing and Running
The repository contains a minimal scaffolding created with [Create React App](https://github.com/facebook/create-react-app). This is only meant as
a starting point and you are free to change the structure if you wish. 

1. To get started, install your dependencies
```
yarn install
```

2. Run the app in development mode
```
yarn start
```

3. Make the neccessary changes to complete the assignment
4. Push out the changes to your forked repository.
5. Raise a PR against our main repository from which you forked and let us know.
6. That's it!

## 1—Search Component
You are to build a search component to search for characters by name. Similar to how Google's search box works
we expect the component to search as the user is typing. Also ensure the user can use the keyboard to navigate the results (Arrow keys and Enter to select)

Also, be mindful of calling the API at a reasonable rate as the user is typing.

## 2—Character Page
The user should be able to select a character from search results and view details about the character. Build a simple page
which shows details about the chosen character. 

We have not shared a design for this page on purpose. You're free to build it to your own taste. Don't worry, we do not expect you to
be an expert designer.

## Things we will look for
- Clean code and using best practices
- Quality of the UI/UX of your solution
- Funcionality of your overall solution and correctness

## Submission
Once you have completed your implementation, please raise a PR against the main repository from which you forked your repository. 
Drop us a mail (join@urbanpiper.com) with the link to your PR.

:zap: May the Force be with you :zap:
