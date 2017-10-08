<template>
  <div class="nodata-wrap">
    <div class="img-wrap">
      <img src="http://www.byjiedian.com/static/img/nodata.png" alt="" />
    </div>
  </div>
</template>

<style lang="less">
.nodata-wrap{
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  .img-wrap{
    width: 120px;
    height: 193px;
    img{
      width: 100%;
      height: 100%;
    }
  }
}
</style>
