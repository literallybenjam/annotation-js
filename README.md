# ANNOTATION.js

Simple JavaScript to handle inline annotations in HTML documents.

## Usage:

Include the script somewhere in your document and run `Annotation.parse(element)`. ANNOTATION.js searches `element` for all children of class `annotation`, hides them, and creates a superscript link to make them visible. If `element` is not provided, it is assumed to be `document.body`.

ANNOTATION.js depends upon the `hidden` attribute, so make sure that elements with this attribute are not visible under your CSS styling (this should be default, but might be overridden in some cases). A quick fix for this is as follows:

```css
*.annotation[hidden] {
    display: none;
}
```

ANNOTATION.js uses `<a class="annotation-link" href="#annotation-link-N"><sup>N</sup></a>` for the links it creates.

## Endmatter:

ANNOTATION.js was coded by [@literallybenjam](https://twitter.com/literallybenjam). It is licensed under [the Unlicense](http://unlicense.org/UNLICENSE).
