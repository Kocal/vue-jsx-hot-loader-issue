# vue-jsx-hot-loader-issue
Issue when `render` depends of a props which is updated in the parent component

## Reproduce

```bash
$ yarn
$ yarn dev-server
```

Open http://localhost:9000 and try to update `items` data from `App.vue` file.
