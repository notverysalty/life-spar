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
    <Card class="homeCard" title="墓型展示">
      <template #body>
        <ul>
          <li>
            <router-link to="/">
              <div>
                <img src="@/assets/Images/msly.jpg" alt />
              </div>
              <p>邙山陵园</p>
            </router-link>
          </li>
          <li>
            <router-link to="/">
              <div>
                <img src="@/assets/Images/mly.jpg" alt />
              </div>
              <p>名人苑</p>
            </router-link>
          </li>
          <li>
            <router-link to="/">
              <div>
                <img src="@/assets/Images/yay.jpg" alt />
              </div>
              <p>怡安苑</p>
            </router-link>
          </li>
          <li>
            <router-link to="/">
              <div>
                <img src="@/assets/Images/zjy.jpg" alt />
              </div>
              <p>紫荆苑</p>
            </router-link>
          </li>
        </ul>
      </template>
    </Card>
  </div>
</template>

<script>
import Card from '@/components/card'
export default {
  components: {
    Card
  }
}
</script>

<style lang="scss" scoped>
.home {
  .likelist {
    margin: 10px auto;
    width: 1200px;
    ul {
      overflow: hidden;
      margin: 0;
      padding: 0;
      text-align: center;
      li {
        list-style: none;
        float: left;
        width: 33%;
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
  .homeCard {
    margin: 0 auto;
    width: 1200px;
    ul {
      overflow: hidden;
      padding: 0;
      text-align: center;
      li {
        list-style: none;
        float: left;
        width: 50%;
        a {
          text-decoration: none;
          div {
            img {
              width: 580px;
              height: 360px;
            }
          }
        }
        p {
          margin: 0;
          text-align: center;
          height: 60px;
          line-height: 60px;
          font-weight: 600;
          color: black;
        }
      }
    }
  }
}
</style>
