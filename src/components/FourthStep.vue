<template>
  <v-card elevation="0">
    <v-row class="ma-0" align="center">
      <v-col class="pt-0 pb-0" cols="12" sm="9" md="6">
        <v-text-field class="inputs" label="PAN Number"></v-text-field>
      </v-col>
      <v-col class="pt-0 pb-0" cols="12" sm="9" md="6">
        <v-btn color="primary" small text @click="attach">
          <v-icon left> mdi-attachment </v-icon>Attach Documents</v-btn
        >

        <input
          type="file"
          class="d-none target"
          @change="
            (event) => {
              HandleChange(event, 'pan');
            }
          "
        />
      </v-col>
    </v-row>
    <v-row class="ma-0" align="center">
      <v-col class="pt-0 pb-0" cols="12" sm="9" md="6">
        <v-text-field class="inputs" label="Aadhar Number"></v-text-field>
      </v-col>
      <v-col class="pt-0 pb-0" cols="12" sm="9" md="6">
        <v-btn color="primary" small text @click="attach">
          <v-icon left> mdi-attachment </v-icon>Attach Documents</v-btn
        >

        <input
          type="file"
          class="d-none target1"
          @change="
            (event) => {
              HandleChange(event, 'aadhar');
            }
          "
        />
      </v-col>
    </v-row>
  </v-card>
</template>

<script>
export default {
  data() {
    return {
      selectedPan: null,
      selectedaadhar: null,
    };
  },
  methods: {
    attach(payload) {
      if (payload == "pan") {
        var el = document.querySelector(".target");
      } else {
        var el = document.querySelector(".target1");
      }
      el.click();
    },

    HandleChange(event, payload) {
      if (payload == "pan") {
        this.selectedPan = event.target.value;
      } else {
        this.selectedaadhar = event.target.value;
      }
    },
  },
};
</script>

<style></style>
