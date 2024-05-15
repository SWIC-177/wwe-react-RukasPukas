# WWE React

## What is React

From my understanding react is used to get the current state of the user's browser. This allows the User Interface (UI) to display content and set content based on things the user has done, is doing or you are wanting the user to do now. This is done by re-rendering.

> React allows you to use a declarative style of code writing... This allows you to write less code and deal with the more interesting stuff.

I am assuming this is similar to the state function that was in the WWE file.  
You must still avoid mutations.

> React is a state management system.

## Notes

> [!NOTE]
> The .jsx file will contain both HTML and JS  
> Never use document. anything outside of establishing the root.  
> Components should always have a capital letter.
> We do not include braces around the export because it is a default export. This means that the whole purpose of exporting default component is that you are only exporting one particular thing.
> With a default export you can call it whatever you want. You are not destructuring.  
> You cannot use class because this is reserved, you must use className.  
> Must use htmlFor instead of For as well for same reason as above.

### Props

> Typically speaking, props are destructured.

> [!NOTE]
> Passing props in is similar to adding attributes in HTML
> Also note you are passing in props now not arguments? Or are they interchangeable terminology?
> You should not be turning off linting rules, these are put in place to help correctly guide your code!  
> The key prompt is used to uniquely identify items in a list. This is a built in react prompt.
> You cannot include multiple react components without first wrapping it in either a div tag or Fragment tag, Fragment will get rid of extra div tags.
> You can shorten it up by adding empty tags instead of Fragment.
> Hooks are additional functions that React offers. They are often characterized with a "use this/that"
> The useState tells react to keep track of the specified data, then to rerender it based on the current state.
> For this project we initialize this with an empty string BECAUSE the search is initially empty. NOTE: This is specific to this case.
> A dispatch function is used to dispatch out and update the state.
> You can rename terms on the left side of the equal sign.

## Thoughts

React is really cool, confusing, but cool! I really enjoyed implementing the search function and even though some parts of it still don't make perfect sense I think more exposure will definitely help. Following along with the extra credit portion also drastically helped clear some things up as to what was happening. During the Code analysis and review I got the gist of what was going on but did not fully understand it.
