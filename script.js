const { createApp } = Vue;
const app = createApp({
  data() {
    return {
      fruits: [
        {
          id: 1,
          name: "Apple",
        },
        {
          id: 2,
          name: "Banana",
        },
        {
          id: 3,
          name: "Orange",
        },
        {
          id: 4,
          name: "Mango",
        },
        {
          id: 5,
          name: "Pineapple",
        },
      ],
    };
  },
  methods: {
    shuffle() {
      this.fruits = this.fruits.sort(() => Math.random() - 0.5);
    },
  },
});
app.mount("#app");
