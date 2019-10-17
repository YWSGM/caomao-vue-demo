<template>
  <input class="checkbox" type="checkbox" :checked="value" @change="onChange" />
</template>

<script>
export default {
  props: {
    value: {
      required: true,
      type: Boolean
    },
    onChange: {
      required: true,
      type: Function
    }
  }
};
</script>
<style lang="stylus" scoped>
.checkbox {
  width: 17px;
  height: 17px;
  display: inline-flex;
  position: relative;
  display: inline-flex;
  align-items: center;
  justify-content: center;

  &:after, &:checked:after {
    content: '';
    background-color: #fff;
    background-image: url('./uncheck.png');
    background-size: 100%;
    flex-grow: 1;
    height: 100%;
    width: 100%;
    z-index: 1;
  }

  &:checked:after {
    background-image: url('./checked.png');
  }
}
</style>