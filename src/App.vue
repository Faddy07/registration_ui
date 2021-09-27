<template>
  <v-app>
    <v-app-bar color="white" elevation="1">
      <v-img src="./assets/blubirch_logo.png" max-height="47" max-width="196">
      </v-img>
      <v-spacer></v-spacer>
      <div>
        <span class="ml-3">
          HOME
        </span>
        <span class="ml-3">
          AUCTION
        </span>
        <span class="ml-3">
          MY ORDERS
        </span>
        <span class="ml-3">
          MY BIDS
        </span>
        <span class="ml-3">
          REFER AND EARN
        </span>
        <span class="ml-3">
          MY CREDITS
        </span>
        <span class="ml-0">
          <v-col class="d-inline-flex mr-0" cols="12" sm="3">
            <v-select :items="items" label="JACKR" dense outlined></v-select>
          </v-col>
        </span>
      </div>
    </v-app-bar>
    <v-main>
      <router-view />
    </v-main>
  </v-app>
</template>

<script>
export default {
  name: "App",

  data: () => ({
    items: ["Foo", "Bar", "Fizz", "Buzz"],
  }),
};
</script>
<style>
* {
  font-family: Inter;
}
.v-messages {
  display: none !important;
}
.v-text-field__details {
  display: none !important;
}
.inputs {
  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 24px;
  /* identical to box height, or 150% */

  letter-spacing: 0.15px;

  color: #666666;

  mix-blend-mode: normal;
}
</style>
