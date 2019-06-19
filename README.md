guidemaker-cardstack-template
==============================================================================

This addon handles style and layout of the cards.

It is a modified fork of [guidemaker-cardstack-template](https://github.com/empress/guidemaker-cardstack-template)
by Chris Manson.

Installation
------------------------------------------------------------------------------

```
git clone <url>
cd guidemaker-cardstack-template
npm install
```

Local development
------------------------------------------------------------------------------

```
yarn link
cd ../cardstack-documentation
yarn link guidemaker-cardstack-template
ember serve
```


Recent changes
------------------------------------------------------------------------------

Notable differences from the default template include:
- increased use of style variables
- adding the Cardstack color theme
- Hacking in subgroups within the Table of Contents (see note)

The base template only supports nesting one level deep, so we have a cosmetic,
hard coded subgroup. To add items, specify them in `page-grouping.js`.
More instructions are in the code comments there.


License
------------------------------------------------------------------------------

This project is licensed under the [MIT License](LICENSE.md).
