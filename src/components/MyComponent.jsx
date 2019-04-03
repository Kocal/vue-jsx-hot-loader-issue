export default {
  name: 'MyComponent',
  props: {
    items: {
      type: Array,
      required: true,
    },
  },
  render(h) {
    return (
      <ul>
        {this.items.map(item => <li>{item}</li>)}
      </ul>
    );
  },
};
