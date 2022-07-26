<script lang="ts" setup>
import { onMounted } from "vue";
import axios from "axios";

onMounted(() => {
  window.addEventListener("beforeunload", fnl);
});
function fnl(event: Event) {
  const view = document.baseURI.includes("purchase");
  if (view) event.preventDefault();
  else window.removeEventListener("beforeunload", fnl);
}

const emits = defineEmits<{
  (
    e: "submit",
    val: {
      name: string;
      deliveryTime: string;
      MKUStudent: boolean;
      deliveryPoint: string;
    }
  ): void;
}>();
</script>
<script lang="ts">
export default {
  data() {
    return {
      formValues: {
        name: "",
        deliveryTime: "09:00",
        MKUStudent: true,
        deliveryPoint: "Alumni Plaza",
      },
    };
  },
  methods: {
    /**
     * send data to the database and open a thank you page
     */
    submit() {
      axios.post("http://localhost:8000/deliveryForm", this.formValues);
      this.$router.push("/thankYou");
    },
  },
};
</script>

<template>
  <main class="flex flex-col flex-1 purchaseRef">
    <h1 class="self-center font-bold md:text-3xl text-cyan-800">
      Delivery Form
    </h1>
    <form
      @submit.prevent="submit"
      class="flex flex-col w-3/6 self-center border bg-sky-300 font-bold italic font-serif"
    >
      <label for="customerName" class="self-center">Name</label>
      <input
        class="flex-1 self-center w-5/6 nameInput"
        id="customerName"
        v-model="formValues.name"
        type="text"
        placeholder="Riki Trump"
      />
      <label for="deliveryTime" class="self-center"
        >Select time for delivery</label
      >
      <input
        class="flex-1 self-center w-5/6"
        id="deliveryTime"
        v-model="formValues.deliveryTime"
        type="time"
        min="09:00"
        max="18:00"
      />
      <label for="location" class="self-center">Are you an MKU student?</label>
      <div class="self-center flex-1 flex flex-col sm:flex-row" id="location">
        <label for="student" class="self-center">yes</label>
        <input
          class="flex-1 self-center mx-2"
          v-model="formValues.MKUStudent"
          id="student"
          name="mku"
          type="radio"
          value="true"
        />
        <label for="notStudent" class="self-center">no</label>
        <input
          class="flex-1 self-center mx-2"
          v-model="formValues.MKUStudent"
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
        v-model="formValues.deliveryPoint"
        id="deliveryVenue"
        class="self-center w-5/6"
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
