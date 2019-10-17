<template>
  <div class="holder">
    <input class="checkbox" type="checkbox" />
    &nbsp;
    <input class="checkbox" type="checkbox" checked />
    &nbsp;
  </div>
</template>

<script>
export default {};
</script>
<style lang="stylus" scoped>
.holder {
  display: flex;
  align-items: center;
}

.checkbox {
  width: 16px;
  height: 16px;
  display: inline-flex;
  position: relative;
  display: inline-flex;
  align-items: center;
  justify-content: center;

  &:after, &:checked:after {
    content: '';
    height: 100%;
    width: 100%;
    background-color: #fff;
    border: 1px solid #bdbdbd;
    z-index: 1;
    display: inline-flex;
    align-items: center;
    justify-content: center;
  }

  &:checked:after {
    content: '√';
  }
}
</style>