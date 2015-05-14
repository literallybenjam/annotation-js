# ANNOTATION.js

Simple JavaScript to handle inline annotations in HTML documents.

## Usage:

Include the script somewhere in your document and run `Annotation.init()` once all DOM content has loaded. ANNOTATION.js searches the document for all elements of class `annotation`, hides them, and creates a superscript link to make them visible.

ANNOTATION.js depends upon the `hidden` attribute, so make sure that elements with this attribute are not visible under your CSS styling (this should be default, but might be overridden in some cases). A quick fix for this is as follows:

```css
*.annotation[hidden] {
    display: none;
}
```

## Endmatter:

ANNOTATION.js was coded by [@literallybenjam](https://twitter.com/literallybenjam). It is licensed under [the Unlicense](http://unlicense.org/UNLICENSE).
