<template>

  <header>
    <img
      alt="Vue logo"
      class="logo mb-5 text-red-100"

      src="@/assets/logo.svg"

    />
  </header>
  <Helloworld msg="Welcome to Vue" />
  <hello />

  <center>
    <header class="p-5">
      <img
        alt="Vue logo"
        class="logo mb-5 text-red-100"
        src="@/assets/logo.svg"
        width="125"
        height="125"
      />
    </header>
    <!-- <Child name="Mitesh" heroName="Thor"/>
    <Child name="Meet" heroName="Iron Man"/>
    <Child name="Mit" heroName="Wanda"/>
    <Child name="Meetesh" heroName="Captain America"/> -->

    <!-- <child title="Thor: Love and Thunder" :likes="5000" :isReleased="true"/> -->
    <!-- <div>
        Parent Component
        <button @click="showChild = !showChild">Toggle Child</button>
      </div>
      <Lifecycle v-if="showChild" />
    <h2 class="text-2xl font-serif">
      Full Name- {{ firstName }} {{ lastName }}
    </h2>
    <h2 class="text-2xl font-serif">Computed Full Name- {{ fullName }}</h2>
    <button
      class="border-solid border-2 border-black p-2 inline-block rounded-2xl"
      @click="changeFullName"
    >
      Change fullName
    </button>
    <br /><br />
    <button
      class="border-solid border-2 border-black p-2 inline-block rounded-2xl"
      @click="items.push({ id: 4, title: 'PC', price: 600 })"
    >
      Add Item
    </button>
    <h2 class="text-2xl font-serif">Computed Total - {{ total }}</h2>
    <h2 class="text-2xl font-serif">Method Total - {{ totall() }}</h2>
    <br />

    <template v-for="item in items" :key="item.id">
      <h2 class="text-2xl font-serif" v-if="item.price > 200">
        {{ item.title }} {{ item.price }}
      </h2>
    </template>

    <h2
      class="text-2xl font-serif"
      v-for="item in expensiveItems"
      :key="item.id"
    >
      {{ item.title }} {{ item.price }}
    </h2>

    <input type="text" v-model="country" /> -->
    <!-- <Hello /> -->
    <!-- <button @click="showPopup = true">Show Popup</button> -->
    <!-- <Popup id="myPopup" v-if="showPopup" @close="closePopup"/> -->

    <!-- <FancyButton> -->
    <!-- <template #header>
        <h1 class="text-3xl">This is header.</h1>
      </template>
      <template #default>
        <p>A paragraph for the main content.</p>
        <p>And another one.</p>
      </template>
      <template #footer>
        <h1 class="2xl">This is Footer.</h1>
      </template> -->
    <!-- <template v-slot:default="slotProps">
        {{ slotProps.firstName }} {{ slotProps.lastName }}
      </template>
    </FancyButton>
    <FancyButton>
      <template v-slot:default="slotProps">
        {{ slotProps.lastName }} {{ slotProps.firstName }}
      </template>
    </FancyButton>  
    <FancyButton>
      <template v-slot:default="slotProps">
        {{ slotProps.firstName }}
      </template>
    </FancyButton> -->
    <!-- <Router /> -->
    <ComponentA /><br />
    <ComponentB />
    <!-- <Buttons /> -->
    <!-- <Buttons settings="Settings" /> -->
    <!-- <Buttons share="Share" /> -->
    <!-- <Home /> -->
    <!-- <router-view /> -->
  </center>
  <Helloworld /> 
  <hello msg="I'm Mitesh"/>

  <!-- <Parent />/ -->
  <!-- <Task /> -->

</template>

<script lang="ts">
import ComponentA from "./components/CompA.vue";
import ComponentB from "./components/CompB.vue";
import FancyButton from "./components/FancyButton.vue";
import Helloworld from "./components/Helloworld.vue";
import Hello from "./components/Hello.vue";
import Task from "./components/Task.vue";
import Parent from "./components/parent.vue";
import Child from "./components/child.vue";
import Popup from "./components/Popup.vue";
import Router from "./components/Router.vue";
import Buttons from "./components/Buttons/Buttons.vue";
import Home from "./components/product/Home.vue";

// import Lifecycle from "./components/Lifecycle.vue";
export default {
  name: "App",
  components: {
    Task,
    Hello,
    Helloworld,
    Parent,
    Child,
    Popup,
    FancyButton,
    Router,
    ComponentA,
    ComponentB,
    // Lifecycle,
    Buttons,
    Home,
  },

  data() {
    return {
      showPopup: false,
    };
    //     showChild: true,
    //     firstName: "Mitesh",
    //     lastName: "Makwana",
    //     items: [
    //       {
    //         id: 1,
    //         title: "TV",
    //         price: 200,
    //       },
    //       {
    //         id: 2,
    //         title: "Fridge",
    //         price: 400,
    //       },
    //       {
    //         id: 3,
    //         title: "Sofa",
    //         price: 600,
    //       },
    //     ],
    //     country: "",
    //   };
    // },
    // methods: {
    //   totall() {
    //     console.log("Method");
    //     return this.items.reduce(
    //       (total, curr) => (total = total + curr.price),
    //       0
    //     );
    //   },
    //   changeFullName() {
    //     this.fullName = "Meet Mak";
    //   },
    // },
    // computed: {
    //   fullName: {
    //     get() {
    //       return `${this.firstName} ${this.lastName}`;
    //     },
    //     set(value) {
    //       const name = value.split(" ");
    //       this.firstName = name[0];
    //       this.lastName = name[1];
    //     },
    //   },
    //   total() {
    //     console.log("Computed");
    //     return this.items.reduce(
    //       (total, curr) => (total = total + curr.price),
    //       0
    //     );
    //   },
    //   expensiveItems() {
    //     return this.items.filter((item) => item.price > 200);
  },
};
</script>
