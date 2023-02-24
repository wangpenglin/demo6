<template>
    <view class="header">
      <div style="height:20px;"></div>
      <nut-row type="flex">
        <nut-col :span="22">
          <nut-input
            label="search"
            :placeholder="title"
            @clear="clearS"
            clearable
            clear-size="14"
            v-model="s"
            right-icon="search"
            @click-right-icon="searchContent"
          >
          </nut-input>
        </nut-col>
        <nut-col :span="2">
          <view>
            <nut-icon name="add" @click="addClick"></nut-icon>
          </view>
        </nut-col>
      </nut-row>
    </view>
  </template>
  
  <script lang="ts">
  import { onMounted, reactive, toRefs } from "vue";
  //:label="$t('message.search')"
  
  export default {
    props: ['title'],
    name: "HeaderComponent",
    components: {},
    emits: ['addClick'],
    setup(_,{emit}) {
      const state = reactive({
        s: "",
      });
  
      const addClick = () => {
        console.log('addClick in header component');
        emit('addClick');
      };
  
      onMounted(() => {
      });
  
      const clearS = () => {
        state.s = "";
      };
      
      const searchContent = () => {

      }

      return {
        ...toRefs(state),
        addClick,
        clearS,
        searchContent,
      };
    },
  };
  </script>
  
  <style lang="scss" scoped>
  $padding-top:20px;
  $padding-bottom:10px;
  $padding-left:10px;
  $padding-right:10px;

  @mixin one {
    height: 80px;
    box-sizing: border-box;
  }

  .header {
    @include one;
    padding: $padding-top $padding-right $padding-bottom $padding-left;
  }

</style>
  