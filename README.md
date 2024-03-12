# Portals for React Native: Portal-to-Portal Navigation 

This demo demonstrates how to use Portal's pub/sub mechanism to drive React Native navigation (using [React Navigation](https://reactnavigation.org/)). 

## How to Run

- Create a `.env` file in the `/packages/app` folder and add an entry for `PORTALS_KEY` like so:

```
PORTALS_KEY=Your Portals Key
```

- Run the following commands in the `/packages/app` directory:

```bash
npm install
npm start
```

- In a new terminal, run the following in the `/packages/app/ios` directory:

```bash
pod install
xed PortalsDemo.xcworkspace
```

- Run the application within a simulator or on device

## How to Navigate

Press the "Click me!" button within the web app presented within the Portal. 

The Home screen push the Details screen onto the navigation stack, and Details screen will push the Home screen onto the start. Continue using the button to create a stack, and use the back button to pop from the stack. 

Note that the appropriate numbers of Portals exist depending on how many screens are on the stack.