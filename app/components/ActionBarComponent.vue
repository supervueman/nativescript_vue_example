<template>
  <ActionBar :title="title">
    <NavigationButton text="Go back" android.systemIcon="ic_menu_back" @tap="$navigateBack"/>
  </ActionBar>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: "Welcome!"
    }
  }
};
</script>
