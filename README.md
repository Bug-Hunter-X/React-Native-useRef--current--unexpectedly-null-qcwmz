# React Native useRef 'current' unexpectedly null

This repository demonstrates a common issue in React Native where the `current` property of a `useRef` hook is unexpectedly `null` even after component mount. This often happens within event handlers or callbacks.

## Problem

The `UnexpectedNullRef.js` file shows a simple component with a `useRef` for a text input.  Attempts to access `textInputRef.current` within the `onChangeText` handler sometimes result in `null`, even after the component has rendered.

## Solution

The `UnexpectedNullRefSolution.js` file provides a fix.  We use the `useEffect` hook with an empty dependency array to ensure the ref is accessible after the component has fully mounted. We also add error handling to gracefully manage the `null` case.

## How to reproduce

1. Clone this repository.
2. Run `npm install`.
3. Run the app in a React Native environment.
4. Observe the console logs and the behavior of the text input.