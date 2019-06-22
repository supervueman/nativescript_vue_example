<template>
  <Page>
    <action-bar-component title="Sign in"></action-bar-component>
    <StackLayout>
      <Label class="message" text="Login" col="0" row="0"/>
      <Label class="message" :text="profileId" col="0" row="0"/>
      <TextField v-model="email" hint="E-mail:"/>
      <TextField v-model="password" :secure="true" hint="Password:"/>
      <Button text="Login" @tap="login"/>
    </StackLayout>
  </Page>
</template>

<script>
import ActionBarComponent from "../components/ActionBarComponent";
import { apolloClient } from "../plugins/apolloProvider";
import { SIGN_IN } from "../graphql/signIn";
export default {
  data() {
    return {
      email: "",
      password: "",
      profileId: "ProfileID"
    };
  },
  methods: {
    login() {
      this.$apollo
        .query({
          query: SIGN_IN,
          variables: {
            email: this.email,
            password: this.password
          }
        })
        .then(res => {
          console.log(res, "_____SIGNIN");
          this.profileId = res.data.login.userId;
        })
        .catch(err => {
          console.log(err, "SIGNIN_ERROR");
        });
      this.email = "";
      this.password = "";
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
