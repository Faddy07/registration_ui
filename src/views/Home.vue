<template>
  <div>
    <v-col align="start" justify="center">
      <span class="heading">Buyer Registration</span>
      <v-stepper class="formBody" v-model="e6" vertical>
        <v-stepper-step class="stepHeading" :complete="e6 > 1" step="1">
          Buyer Details
        </v-stepper-step>

        <v-stepper-content step="1">
          <first-step class="mb-5" />
          <v-btn color="primary" @click="e6 = 2">
            Next
          </v-btn>
          <v-btn text>
            Cancel
          </v-btn>
        </v-stepper-content>

        <v-stepper-step class="stepHeading" :complete="e6 > 2" step="2">
          Selecting Marketplaces
        </v-stepper-step>

        <v-stepper-content step="2">
          <second-step class="mb-5" />
          <v-btn color="primary" @click="e6 = 3">
            Next
          </v-btn>
          <v-btn text>
            Cancel
          </v-btn>
        </v-stepper-content>

        <v-stepper-step class="stepHeading" :complete="e6 > 3" step="3">
          GST & Account Details
        </v-stepper-step>

        <v-stepper-content step="3">
          <third-step class="mb-5" />
          <v-btn color="primary" @click="e6 = 4">
            Next
          </v-btn>
          <v-btn text>
            Cancel
          </v-btn>
        </v-stepper-content>

        <v-stepper-step class="stepHeading" :complete="e6 > 4" step="4">
          Document Upload
        </v-stepper-step>
        <v-stepper-content step="4">
          <fourth-step class="mb-5" />
          <v-btn color="primary" @click="e6 = 5">
            Next
          </v-btn>
          <v-btn text>
            Cancel
          </v-btn>
        </v-stepper-content>
        <v-stepper-step class="stepHeading" step="5">
          Register Address
        </v-stepper-step>
        <v-stepper-content step="5">
          <fifth-step class="mb-5" />
          <v-btn color="primary" @click="submit">
            Submit
          </v-btn>
          <v-btn text>
            Cancel
          </v-btn>
        </v-stepper-content>
      </v-stepper>
    </v-col>
  </div>
</template>

<script>
import FirstStep from "../components/FirstStep.vue";
import SecondStep from "../components/SecondStep.vue";
import ThirdStep from "../components/ThirdStep.vue";
import FourthStep from "../components/FourthStep.vue";
import FifthStep from "../components/FifthStep.vue";
import Swal from "sweetalert2";
export default {
  name: "Home",
  data() {
    return {
      e6: 1,
    };
  },

  methods: {
    submit() {
      Swal.fire(
        "",
        "Your submission for registeration is successful.\nApplication No. : 1889674",
        "success"
      );
    },
  },

  components: {
    SecondStep,
    ThirdStep,
    FourthStep,
    FifthStep,
    FirstStep,
  },
};
</script>
<style>
.heading {
  font-family: Inter;
  font-size: 32px;
  font-style: normal;
  font-weight: 600;
  margin-left: 230px;
  line-height: 39px;
  letter-spacing: 0em;
  text-align: left;
}
.formBody {
  position: absolute;
  width: 1064px;
  height: 794px;
  left: 230px;

  /* left: 188px; */
  /* top: 135px; */
  top: 20px;
  background: #ffffff;
  box-shadow: 0px 2px 6px rgba(0, 0, 0, 0.25);
  border-radius: 4px;
}
.stepHeading {
  font-family: Roboto;
  font-style: normal;
  font-weight: 500;
  font-size: 24px;
  line-height: 24px;
}
</style>
