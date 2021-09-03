// Error : Uncaught ReferenceError: regeneratorRuntime is not defined
// https://flaviocopes.com/parcel-regeneratorruntime-not-defined/
import "regenerator-runtime/runtime";

import App from "./App.js";

const app = new App(document.querySelector("App"));