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
    <Card class="homeCard" title="热门陵园">
      <template #body>
        <ul>
          <li>
            <router-link to="/">
              <div>
                <img src="@/assets/Images/msly.jpg" alt />
              </div>
              <p>
                <span>邙山陵园</span>
                <span class="small">惠阳</span>
              </p>
              <div class="down">
                <span>
                  <span class="small">起价：</span>
                  <span class="orange">来电咨询</span>
                </span>
                <span class="right">
                  <span>一体的生态陵园</span>
                </span>
              </div>
            </router-link>
          </li>
          <li>
            <router-link to="/">
              <div>
                <img src="@/assets/Images/mly.jpg" alt />
              </div>
              <p>
                <span>名人苑</span>
                <span class="small">惠阳</span>
              </p>
              <div class="down">
                <span>
                  <span class="small">起价：</span>
                  <span class="orange">来电咨询</span>
                </span>
                <span class="right">
                  <span>一体的生态陵园</span>
                </span>
              </div>
            </router-link>
          </li>
          <li>
            <router-link to="/">
              <div>
                <img src="@/assets/Images/yay.jpg" alt />
              </div>
              <p>
                <span>怡安苑</span>
                <span class="small">惠阳</span>
              </p>
              <div class="down">
                <span>
                  <span class="small">起价：</span>
                  <span class="orange">来电咨询</span>
                </span>
                <span class="right">
                  <span>一体的生态陵园</span>
                </span>
              </div>
            </router-link>
          </li>
          <li>
            <router-link to="/">
              <div>
                <img src="@/assets/Images/zjy.jpg" alt />
              </div>
              <p>
                <span>紫荆苑</span>
                <span class="small">惠阳</span>
              </p>
              <div class="down">
                <span>
                  <span class="small">起价：</span>
                  <span class="orange">来电咨询</span>
                </span>
                <span class="right">
                  <span>一体的生态陵园</span>
                </span>
              </div>
            </router-link>
          </li>
          <li>
            <router-link to="/">
              <div>
                <img src="@/assets/Images/zjy.jpg" alt />
              </div>
              <p>
                <span>名人苑</span>
                <span class="small">惠阳</span>
              </p>
              <div class="down">
                <span>
                  <span class="small">起价：</span>
                  <span class="orange">来电咨询</span>
                </span>
                <span class="right">
                  <span>一体的生态陵园</span>
                </span>
              </div>
            </router-link>
          </li>
          <li>
            <router-link to="/">
              <div>
                <img src="@/assets/Images/zjy.jpg" alt />
              </div>
              <p>
                <span>名人苑</span>
                <span class="small">惠阳</span>
              </p>
              <div class="down">
                <span>
                  <span class="small">起价：</span>
                  <span class="orange">来电咨询</span>
                </span>
                <span class="right">
                  <span>一体的生态陵园</span>
                </span>
              </div>
            </router-link>
          </li>
        </ul>
      </template>
    </Card>
    <Card class="show" title="墓型展示">
      <template #body>
        <div class="left">
          <div class="head"></div>
          <div class="movie"></div>
          <div class="title"></div>
        </div>
        <div class="right">
          <ul>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
          </ul>
        </div>
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
        width: 33%;
        a {
          text-decoration: none;
          div {
            img {
              width: 380px;
              height: 245px;
            }
          }
        }
        .down {
          height: 40px;
          line-height: 40px;
          padding: 0 20px;
          > span {
            width: 50%;
            display: inline-block;
            text-align: left;
            .small {
              font-size: 14px;
              color: #6f7780;
            }
            .orange {
              color: #ff8347;
              font-weight: bold;
            }
          }
          .right {
            text-align: right;
            > span {
              display: inline-block;
              height: 20px;
              line-height: 20px;
              padding: 0 5px;
              font-size: 14px;
              color: white;
              background-color: #ff6700;
              border-radius: 3px;
            }
          }
        }
        p {
          margin: 0;
          text-align: left;
          height: 40px;
          line-height: 40px;
          font-weight: 600;
          padding: 0 20px;
          box-sizing: border-box;
          color: black;
          span {
            width: 50%;
            display: inline-block;
          }
          .small {
            font-size: 12px;
            color: #6f7780;
            font-weight: normal;
            text-align: right;
          }
        }
      }
    }
  }
  > .show {
    width: 1200px;
    height: 400px;
    margin: 0 auto;
    overflow: hidden;
    .left {
      float: left;
      height: 400px;
      width: 300px;
      border: 1px solid #ccc;
    }
    .right {
      float: right;
    }
  }
}
</style>
