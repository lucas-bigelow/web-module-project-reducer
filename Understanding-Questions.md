# Understanding Questions:
1. What are the steps of execution from the pressing of the 1 button to the rendering of our updated value? List what part of the code excutes for each step.
* The user presses the 1 button.
* This fires the 'onClick' prop that was passed from 'App.js'
* The event handler in App.js executes, triggering the dispatch
* The action 'addOne' runs, returning an object {type: 'ADD_ONE'}
* The action object then goes through the dispatch which figures out what to do using the switch statement
* 1 is added to the current state
* When state changes, the total box rerenders and displays the new correct total
...

* TotalDisplay shows the total plus 1.
