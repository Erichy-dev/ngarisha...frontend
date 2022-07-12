<script lang="ts" setup></script>

<template>
  <main class="flex flex-col flex-1">
    <h1 class="self-center font-bold md:text-3xl text-cyan-800">
      Delivery Form
    </h1>
    <form
      action="#"
      method="get"
      class="flex flex-col w-44 h-56 md:w-56 md:h-80 self-center border text-violet-800 bg-purple-300 font-bold italic font-serif"
    >
      <label for="customerName" class="self-center">Name</label>
      <input
        class="flex-1"
        id="customerName"
        type="text"
        placeholder="Riki Trump"
      />
      <label for="deliveryTime" class="self-center"
        >Select time for delivery</label
      >
      <input
        class="flex-1 self-center"
        id="deliveryTime"
        type="time"
        min="09:00"
        max="18:00"
        value="10:00"
      />
      <label for="location" class="self-center">Are you an MKU student?</label>
      <div class="self-center flex-1 flex flex-row" id="location">
        <label for="student" class="self-center">yes</label>
        <input
          class="flex-1 self-center mx-2"
          id="student"
          name="mku"
          type="radio"
          value="yes"
        />
        <label for="notStudent" class="self-center">no</label>
        <input
          class="flex-1 self-center mx-2"
          id="notStudent"
          name="mku"
          type="radio"
          value="no"
        />
      </div>
      <label for="deliveryVenue" class="self-center"
        >Select delivery point</label
      >
      <select name="deliveryVenue" id="deliveryVenue" class="self-center">
        <option value="AlumniPlaza">Alumnini Plaza</option>
        <option value="Library">Library</option>
        <option value="CTHall">CTHall</option>
        <option value="StudentCenter">Student Center</option>
      </select>
      <label for="submit"></label>
      <input
        class="flex-1 mb-4 md:mb-10 self-center"
        type="submit"
        value="SUBMIT"
      />
    </form>
  </main>
</template>
