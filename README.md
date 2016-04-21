# ember-cli-rtlcss

Ember Addon that adds a post build step which runs final output css files through [rtlcss](https://github.com/MohammadYounes/rtlcss).

This is a work in progress - at this point it simply runs the default `rtlcss.process()` function on the `app.css` and `vendor.css` files and dumps out `app.rtl.css` and `vendor.rtl.css`.

Your application will need to detect when it needs rtl css included and swap out the css files. In our case this is happening on the server.


## Installation

```
ember install ember-cli-rtlcss
```

After that, every time you do a build, the `.rtl.css` files will be generated.
