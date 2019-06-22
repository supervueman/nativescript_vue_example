<template>
  <Page>
    <action-bar-component title="Home"></action-bar-component>
    <StackLayout>
      <Label class="message" :text="msg" col="0" row="0"/>
      <Button text="Sign in" @tap="$navigateTo(signin)"/>
      <Button text="Sign up" @tap="$navigateTo(signup)"/>
      <Gradient direction="to right" colors="#FF0077, red, #FF00FF">
        <Label
          text="Best gradient."
          horizontalAlignment="center"
          style="color: white; padding: 20"
        />
      </Gradient>
      <Carousel
        height="200px"
        width="100%"
        pageChanged="myChangeEvent"
        pageTapped="mySelectedEvent"
        indicatorColor="#000"
        finite="true"
        bounce="false"
        :showIndicator="false"
        verticalAlignment="top"
        android:indicatorAnimation="swap"
        color="white"
      >
        <CarouselItem id="slide1" backgroundColor="#b3cde0" verticalAlignment="middle">
          <Label text="Slide 1" backgroundColor="#50000000" horizontalAlignment="center"/>
        </CarouselItem>
        <CarouselItem id="slide2" backgroundColor="#6497b1" verticalAlignment="middle">
          <Label text="Slide 2" backgroundColor="#50000000" horizontalAlignment="center"/>
        </CarouselItem>
        <CarouselItem id="slide3" backgroundColor="#005b96" verticalAlignment="middle">
          <Label text="Slide 3" backgroundColor="#50000000" horizontalAlignment="center"/>
        </CarouselItem>
        <CarouselItem id="slide4" backgroundColor="#03396c" verticalAlignment="middle">
          <Label text="Slide 4" backgroundColor="#50000000" horizontalAlignment="center"/>
        </CarouselItem>
      </Carousel>
    </StackLayout>
  </Page>
</template>

<script>
import SignUp from "./pages/SignUp";
import SignIn from "./pages/SignIn";

import ActionBarComponent from "./components/ActionBarComponent";

export default {
  data() {
    return {
      msg: "Hello!",
      signup: SignUp,
      signin: SignIn
    };
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
