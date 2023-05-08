# Redux Toolkit TypeScript Example

This example shows how to integrate Next.js with [Redux Toolkit](https://redux-toolkit.js.org).

The **Redux Toolkit** is a standardized way to write Redux logic (create actions and reducers, setup the store with some default middlewares like redux devtools extension). This example demonstrates each of these features with Next.js

## Original Project Template
> create-next-app --example with-redux
> 
> [Next Reference](https://redux.js.org/introduction/getting-started)

## Material UI (MUI)
> [MUI Reference](https://mui.com/material-ui/getting-started/overview/)

## Counter: Redux Template Sample
## Listings: Moov POC 

## Redux Concepts
### One way data flow
> Redux architecture revolves around a strict unidirectional data flow.  This means that all data in an application follows the same lifecycle pattern, making the logic of your app more predictable and easier to understand.

### Unit Testing
> Redux code is mostly plain JavaScript, so it's easy to write tests for your reducers, action creators, and middleware.  Furthermore, Redux's architecture lends itself well to writing tests that are isolated and predictable, which makes your codebase more resilient and your tests less brittle.

### Store
> The store holds the whole state tree of your application. The only way to change the state inside it is to dispatch an action on it.

### Actions
> Actions are plain JavaScript objects. Actions must have a type property that indicates the type of action being performed. 
> Types should typically be defined as string constants. Once your app is large enough, you may want to move them into a separate module.

### Reducers
> Reducers specify how the application's state changes in response to actions sent to the store. 
> Remember that actions only describe what happened, but don't describe how the application's state changes.

### Dispatch
> Dispatching an action is the only way to trigger a state change.

### Selectors
> Selectors are functions that take the Redux store state as an argument and return some data to pass to the component.

### Thunk
> A thunk is a specific kind of Redux function that can contain asynchronous logic. 
> Thunks are typically used to make async requests to a server and dispatch actions in response to the returned data.

### Slice
> A slice is a collection of reducer logic and actions for a single feature of your app.
