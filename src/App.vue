<template>
  <div>
    Hello world
    <MyComponent :items="items" />
  </div>
</template>

<script>
import MyComponent from './components/MyComponent';

export default {
  components: { MyComponent },
  data() {
    return {
      items: [
        'foo',
        'bar',
      ],
    };
  },
};
</script>
