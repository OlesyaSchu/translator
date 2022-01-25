import App from './App.svelte';
import preTranslate from './preTranslate.js';

(preTranslate)()

var app = new App({
	target: document.body
});

export default app;