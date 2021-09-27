<template>
  <v-card elevation="0">
    <v-row class="ma-0">
      <v-col class="pt-0 pb-0" cols="12" sm="12" md="12">
        <v-text-field class="inputs" label="Address Line 1"></v-text-field>
      </v-col>
      <v-col class="pt-0 pb-0" cols="12" sm="12" md="12">
        <v-text-field class="inputs" label="Address Line 1"></v-text-field>
      </v-col>
    </v-row>
    <v-row class="ma-0" justify="space-between">
      <v-col class="pt-0 pb-0" cols="12" sm="6" md="3">
        <v-text-field class="inputs" label="City"></v-text-field>
      </v-col>
      <v-col class="pt-0 pb-0" cols="12" sm="6" md="3">
        <v-text-field class="inputs" label="State"></v-text-field>
      </v-col>
      <v-col class="pt-0 pb-0" cols="12" sm="6" md="3">
        <v-text-field class="inputs" label="Pin Code"></v-text-field>
      </v-col>
    </v-row>
    <v-row class="ma-0">
      <v-checkbox
        v-model="$store.state.terms"
        label="By checking the box and pressing the submit button, I agree to and accept the Terms & Conditions that apply."
      ></v-checkbox>
    </v-row>
  </v-card>
</template>

<script>
export default {};
</script>

<style></style>
