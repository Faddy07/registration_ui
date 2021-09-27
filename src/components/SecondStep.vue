<template>
  <v-card elevation="0">
    <v-card max-height="340px" max-width="846px" outlined class="mb-3 pa-0">
      <v-text-field
        class="ma-0"
        placeholder="Search..."
        color="gray 4"
        dense
        clearable
        v-model="search"
        background-color="#F6F6F6"
        prepend-inner-icon="mdi-magnify"
      ></v-text-field>
      <div v-for="i in searchCheckbox" :key="i.label">
        <v-row class="ma-0 ml-5 mr-5" justify="center" align="center">
          <v-checkbox
            class="ma-0 labelStyle"
            v-model="i.value"
            :label="i.label"
          ></v-checkbox>
          <v-spacer></v-spacer>
          <span class="terms">T&C</span>
        </v-row>
        <v-divider></v-divider>
      </div>
    </v-card>
  </v-card>
</template>

<script>
export default {
  data() {
    return {
      search: "",
    };
  },
  computed: {
    searchCheckbox() {
      return this.$store.state.checkboxData.filter((e) =>
        e.label.match(this.search)
      );
      //   return this.$store.state.checkboxData.match();
    },
  },
};
</script>

<style>
.terms {
  position: static;
  width: 30px;
  height: 22px;
  left: 16px;
  top: 12px;

  font-family: Lato;
  font-style: normal;
  font-weight: bold;
  font-size: 12px;
  line-height: 22px;
  /* identical to box height, or 183% */

  text-align: right;

  /* Blue 1 */

  color: #2f80ed;
}
.labelStyle {
  font-family: Lato;
  font-style: normal;
  font-weight: bold;
  font-size: 12px;
  line-height: 22px;
}
</style>
