<template>
  <Page>
    <action-bar-component title="Sign up"></action-bar-component>
    <StackLayout>
      <Label class="message" :text="msg" col="0" row="0"/>
      <TextField v-model="email" hint="E-mail:"/>
      <TextField v-model="password" :secure="true" hint="Password:"/>
      <Button text="Login" @tap="signUp"/>
    </StackLayout>
  </Page>
</template>

<script>
import ActionBarComponent from "../components/ActionBarComponent";
import { apolloClient } from "../plugins/apolloProvider";
import { SIGN_UP } from "../graphql/signUp";
export default {
  data() {
    return {
      msg: "Sign Up",
      email: "",
      password: ""
    };
  },
  methods: {
    signUp() {
      this.$apollo
        .mutate({
          mutation: SIGN_UP,
          variables: {
            email: this.email,
            password: this.password,
            isStream: false
          }
        })
        .then(res => {
          console.log(res);
        })
        .catch(err => {
          console.log(err);
        });
    }
  },
  components: {
    ActionBarComponent
  }
};
</script>

<style scoped>
ActionBar {
  background-color: #53ba82;
  color: #ffffff;
}

.message {
  vertical-align: center;
  text-align: center;
  font-size: 20;
  color: #333333;
}
</style>
