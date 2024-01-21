# Laravel vue asset helper (Please follow the setups)
Laravel asset function for Vue3 (Laravel 10 + Vue + InertiaJs)

This package provides a helper to generate paths to assets on the client side the same as in Laravel with asset('foo.png').
Like you use "asset" in your Laravel blade

## Installing
Using npm:
```bash
$ npm i @acwork/laravel-vue-asset
```
Once the package is installed, you can import the library using `import` approach:

Edit .env file

```bash
ASSET_URL=https://foo.cloudfront.net
VITE_ASSET_URL="${ASSET_URL}"
```

```js
import { Asset } from '@acwork/laravel-vue-asset';
```

### Edit in your resources/js/app.js
```js
createInertiaApp({
    title: (title) => `${title} - ${appName}`,
    resolve: (name) => resolvePageComponent(`./Pages/${name}.vue`, import.meta.glob('./Pages/**/*.vue')),
    setup({ el, App, props, plugin }) {
        return createApp({ render: () => h(App, props) })
            .use(plugin)
            .use(ZiggyVue)
            .use(Asset)
            .mount(el);
    },
    progress: {
        color: '#4B5563',
    },
});
```

```html
<img :src="asset(image.src)" :alt="image.alt" class="w-6 h-6 rounded"/>
```

1. Go to .env file
2. Deinfe your S3 url with key ASSET_URL=https://your-bucket.s3.amazonaws.com/
3. Add VITE key VITE_ASSET_URL="${ASSET_URL}"
4. Go to resources/js/app.js and add code
5. use asset(path) function anywhere in your vue template

## Usage
The asset prefix can be configured with an environment variable(.env).
To configure with an .env variable:
```bash
ASSET_URL=https://foo.cloudfront.net
VITE_ASSET_URL="${ASSET_URL}"
```

## About Cresco Developers (acWork)
Creso Developers is a web app and mobile development agency based on the Chennai, India.

## License
The MIT License (MIT). Please see [License File](LICENSE) for more information.