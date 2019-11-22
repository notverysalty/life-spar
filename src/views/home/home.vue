<template>
  <div class="home">
    <div class="likelist">
      <ul>
        <li>
          <router-link to="/">
            <div>
              <img src="@/assets/Images/like3.jpg" alt />
            </div>
            <p>陵园大全</p>
          </router-link>
        </li>
        <li>
          <router-link to="/">
            <div>
              <img src="@/assets/Images/like1.jpg" alt />
            </div>
            <p>生命晶石</p>
          </router-link>
        </li>
        <li>
          <router-link to="/">
            <div>
              <img src="@/assets/Images/like2.jpg" alt />
            </div>
            <p>族&nbsp;&nbsp;&nbsp;&nbsp;谱</p>
          </router-link>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
.home {
  .likelist {
    margin: 10px auto;
    padding: 25px 15%;
    ul {
      li {
        list-style: none;
        float: left;
        width: 31%;
        a {
          text-decoration: none;
        }
        p {
          text-align: center;
          height: 60px;
          line-height: 60px;
          color: black;
          background: url('../../assets/Images/catebg.png') no-repeat center;
        }
      }
    }
  }
}
</style>
