# konami-code for JavaScript
Implementation of the [Konami Code](https://en.wikipedia.org/wiki/Konami_Code) in JavaScript.

`konamiCode` is a function that returns a Promise after the Konami code has been introduced on the page.

The listener works only once. It's removed from the window after the code has been introduced.

```JS
konamiCode().then(callback_function);
```

[View demo](https://experiments.destesoft.com/konami-code/)
