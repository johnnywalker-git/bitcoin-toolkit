
# Bitcoin Toolkit

This web application was designed for a user to be able to see the current value of a singular Bitcoin in various currencies.

It also has a feature to take an input value and a currency and return the value of this figure in Bitcoin.

Live preview...
https://bitcoin-toolkit.netlify.app/


## User stories

I based the functionality of my application on the following user stories...

- As a user I can see a list of the current prices of Bitcoin in a variety of currencies.

- As a user I can input a figure and select a currency and have a value returned to me which is the current equivelant value of Bitcoins.

- As a user, if I insert a figure which is 0 or below I will recieve an error message telling me as such.

- As a user, if I do not select a currency for my input figure I should see a warning advising me to select a currency.

## The Stack

As this was just a sample project I wanted to keep things simple. 

I didn't need to use `NextJS` as I usually would because it was only a small application and did not need things like routing etc.

Things I DID use:
- `React`(Vite)
- `Axios`(Network requests)
- `TailwindCSS`(Styling)
- `Iconify`(Icons)
- `MUI`(Styled components)


It was important for me to use things such as `Tailwind` because it allowed me to be faster in trying out how things looked. Although I had a basic plan on Figma to refer to.

I used `MaterialUI` components 
because it was easy to import the dropdown menu in particular, required little styling and had error displaying built in. What I found challenging was getting the error styling to stay in line in a fle box, something I will be looking to fix in revisions.



## Planning - Wireframe


I thought it important to wire-frame so I had a rough idea of how the app would look, placements for inputs and how my grids etc would work for displaying the different currency values. I used `Figma` for this.

![App Screenshot](https://github.com/johnnywalker-git/bitcoin-toolkit/blob/main/Readme-screenshots/wireframe.jpg?raw=true)

## Planning - Component Tree

I also needed to create a component tree to give me an idea of which props would need passing down, and if i needed UseContext() etc.

As it was relitvely simple, I used a `Figjam` board to quikcly collect my ideas. Small bits of state for error handling etc were added at a later stage.

![App Screenshot](https://github.com/johnnywalker-git/bitcoin-toolkit/blob/main/Readme-screenshots/component-tree.jpg?raw=true)



## Installation



```bash
  fork Repo
  npm install 
  npm run dev
  
```
    
## Usage

On page load, if the application succesfully retrieves data from the axios request there will be two components.

The first will allow you to input a value (Above 0) and select a currency from the available currencies of the endpoint (see second component.)

You can then click convert where a figure should come back showing you the current BTC amount for the values you input.

The second component is a table of each of the currencies allowed by the endpoint, and their corresponding value for one Bitcoin. You can click a drop-down on each grid item and see things such as the past value, and the buy and sell value for this currency. Although I am still working on styling for this to expand just the induvidual container.

This component does the initial fetch for data, and passes it to the parent. This allows the converter component to iterate over the currencies for the drop-down selection menu.


## Challenges

I did face some challenges when making this application...

- Refreshing data.
I tried to incorporate a setInterval in my useEffect, in order to bring the data from the endpoint at set intervals, thus keeping the component refreshed with the newest values. I am not sure if this worked and is something I am looking to fix in the future. 

When initally making the application i looked into using websockets which may be a better solution. Although I don't have ample experience with this yet it is something I am looking in to implementing.

- Testing
I can see the benefits that testing would bring to this application, as I was manually testing it throughout, I would like to think that an automated unit-test suite such as Cypress would not only speed this up, but also make the output of the functions more robust and give more confidence that the app is working as expected.

I am also aware that if this application was going to production then intergrating end-to-end tests into the CI/CD pipeline would decrease possible bugs.


## Challenges

I did face some challenges when making this application...

- Refreshing data.
I tried to incorporate a setInterval in my useEffect, in order to bring the data from the endpoint at set intervals, thus keeping the component refreshed with the newest values. I am not sure if this worked and is something I am looking to fix in the future. 

When initally making the application i looked into using websockets which may be a better solution. Although I don't have ample experience with this yet it is something I am looking in to implementing.

- Testing
I can see the benefits that testing would bring to this application, as I was manually testing it throughout, I would like to think that an automated unit-test suite such as Cypress would not only speed this up, but also make the output of the functions more robust and give more confidence that the app is working as expected.

I am also aware that if this application was going to production then intergrating end-to-end tests into the CI/CD pipeline would decrease possible bugs.



## Future improvements

In the future I would like to make the following improvements:

- Building a dedicated test suite in order to make the application more robust and reliable.
- Optimise the performance, or be aware of any detrimental activity to the speed of the application.
- Security - although I can't see any immediate security threats it's important to keep aware, especially if we have user accounts.
- Incorporating local storage - If we could save results for the in local storage this may be helpful in order to see historical data.
- General styling, there are some things with grid in particular that could work better, although the app is responsive I can definitely improve the over-all look.