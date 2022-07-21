<script lang="ts" setup>
import { onMounted, reactive } from "vue";

onMounted(() => {
  window.addEventListener("beforeunload", fnl);
});
function fnl(event: Event) {
  const view = document.baseURI.includes("purchase");
  if (view) event.preventDefault();
  else window.removeEventListener("beforeunload", fnl);
}

import.meta.hot?.on("beforeFullReload", () => {
  console.log("crazy");
});

const emits = defineEmits<{
  (
    e: "submit",
    val: {
      name: string;
      delivery: string;
      student: boolean;
      deliverPoint: string;
    }
  ): void;
}>();
function submit() {
  emits("submit", formValues);
}

const formValues = reactive({
  name: "",
  delivery: "9:00",
  student: true,
  deliverPoint: "Alumni Plaza",
});
</script>
<script lang="ts">
export default {
  data() {
    return {};
  },
  beforeCreate() {
    this.$router.beforeResolve(() => {
      console.log("hi");
    });
    // console.log(me);
  },
};
</script>

<template>
  <main class="flex flex-col flex-1" ref="puchaseRef">
    <h1 class="self-center font-bold md:text-3xl text-cyan-800">
      Delivery Form
    </h1>
    <form
      @submit="submit"
      class="flex flex-col w-44 h-56 md:w-56 md:h-80 self-center border text-violet-800 bg-purple-300 font-bold italic font-serif"
    >
      <label for="customerName" class="self-center">Name</label>
      <input
        class="flex-1 self-center w-3/4 nameInput"
        id="customerName"
        v-model="formValues.name"
        type="text"
        placeholder="Riki Trump"
      />
      <label for="deliveryTime" class="self-center"
        >Select time for delivery</label
      >
      <input
        class="flex-1 self-center"
        id="deliveryTime"
        v-model="formValues.delivery"
        type="time"
        min="09:00"
        max="18:00"
      />
      <label for="location" class="self-center">Are you an MKU student?</label>
      <div class="self-center flex-1 flex flex-row" id="location">
        <label for="student" class="self-center">yes</label>
        <input
          class="flex-1 self-center mx-2"
          v-model="formValues.student"
          id="student"
          name="mku"
          type="radio"
          value="true"
        />
        <label for="notStudent" class="self-center">no</label>
        <input
          class="flex-1 self-center mx-2"
          v-model="formValues.student"
          id="notStudent"
          name="mku"
          type="radio"
          value="false"
        />
      </div>
      <label for="deliveryVenue" class="self-center"
        >Select delivery point</label
      >
      <select
        name="deliveryVenue"
        v-model="formValues.deliverPoint"
        id="deliveryVenue"
        class="self-center"
      >
        <option value="AlumniPlaza">Alumnini Plaza</option>
        <option value="Library">Library</option>
        <option value="CTHall">CTHall</option>
        <option value="StudentCenter">Student Center</option>
      </select>
      <label for="submit"></label>
      <button
        class="flex-1 mb-4 md:mb-10 self-center submitButton"
        type="submit"
      >
        SUBMIT
      </button>
    </form>
  </main>
</template>
