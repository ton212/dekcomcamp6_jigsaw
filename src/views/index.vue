<template>
  <div>
    <div class="stage" :style="{ 'background-image': image }">
      <div class="jigsaws">
        <div class="row">
          <div class="card" ref="card1" @click="hideCard($event)">1</div>
          <div class="card" ref="card2" @click="hideCard($event)">2</div>
          <div class="card" ref="card3" @click="hideCard($event)">3</div>
          <div class="card" ref="card4" @click="hideCard($event)">4</div>
          <div class="card" ref="card5" @click="hideCard($event)">5</div>
        </div>
        <div class="row">
          <div class="card" ref="card6" @click="hideCard($event)">6</div>
          <div class="card" ref="card7" @click="hideCard($event)">7</div>
          <div class="card" ref="card8" @click="hideCard($event)">8</div>
          <div class="card" ref="card9" @click="hideCard($event)">9</div>
          <div class="card" ref="card10" @click="hideCard($event)">10</div>
        </div>
        <div class="row">
          <div class="card" ref="card11" @click="hideCard($event)">11</div>
          <div class="card" ref="card12" @click="hideCard($event)">12</div>
          <div class="card" ref="card13" @click="hideCard($event)">13</div>
          <div class="card" ref="card14" @click="hideCard($event)">14</div>
          <div class="card" ref="card15" @click="hideCard($event)">15</div>
        </div>
        <div class="row">
          <div class="card" ref="card16" @click="hideCard($event)">16</div>
          <div class="card" ref="card17" @click="hideCard($event)">17</div>
          <div class="card" ref="card18" @click="hideCard($event)">18</div>
          <div class="card" ref="card19" @click="hideCard($event)">19</div>
          <div class="card" ref="card20" @click="hideCard($event)">20</div>
        </div>
        <div class="row">
          <div class="card" ref="card21" @click="hideCard($event)">21</div>
          <div class="card" ref="card22" @click="hideCard($event)">22</div>
          <div class="card" ref="card23" @click="hideCard($event)">23</div>
          <div class="card" ref="card24" @click="hideCard($event)">24</div>
          <div class="card" ref="card25" @click="hideCard($event)">25</div>
        </div>
      </div>
      <div class="clear-fix"></div>
      <div class="controller">
        <button @click="hideAllCards">Show</button>
        <span style="color: #fff;">{{ this.imageIndex + 1 }} / {{ this.imageUrls.length }}</span>
        <button @click="nextImage">Next Image</button>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'Index',
    data () {
      return {
        imageIndex: 0,
        imageUrls: [
          "https://i.imgur.com/qwhULeb.jpg",
          "https://i.imgur.com/l2YaMbO.jpg",
          "https://i.imgur.com/uxAN3rV.jpg",
          "https://i.imgur.com/Lwdb5V3.jpg",
          "https://i.imgur.com/4ulmIwe.jpg",
          "https://i.imgur.com/5gAp11H.jpg",
          "https://i.imgur.com/mS6j8rU.jpg",
          "https://i.imgur.com/OmFW50Q.jpg",
          "https://i.imgur.com/sDzYZmV.jpg",
          "https://i.imgur.com/AUxnrYB.jpg",
          "https://i.imgur.com/dkP8jHl.jpg",
          "https://i.imgur.com/oKtTaB6.jpg",
          "https://i.imgur.com/p8iNKr1.jpg",
          "https://i.imgur.com/QKKui0e.png",
          "https://i.imgur.com/loHh2Ax.jpg"
        ]
      }
    },
    computed: {
      image () {
        return 'url(' + this.imageUrls[this.imageIndex] + ')'
      }
    },
    methods: {
      hideCard (event) {
        event.target.style.visibility = 'hidden'
      },
      nextImage () {
        for (var i = 1; i < 26; i++) {
          this.$refs['card' + i].style.visibility = 'visible';
        }

        this.imageIndex++
      },
      hideAllCards () {
        for (var i = 1; i < 26; i++) {
          this.$refs['card' + i].click()
        }
      }
    }
  }
</script>

<style scoped>
  .stage {
    width: 900px;
    height: 900px;
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center center;
  }
  
  .jigsaws .row .card {
    width: 180px;
    height: 180px;
    background: #e0e0e0;
    float: left;
    text-align: center;
    font-size: 80px;
    padding-top: 50px;
    font-weight: bold;
    font-family: 'Helvetica';
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
    cursor: pointer;
    border: 0px solid #aaa;
  }

  .jigsaws .row .card:hover {
    background: #aaa;
  }

  .controller {
    padding-top: 20px;
    text-align: center;
  }

  .clear-fix {
    clear: both;
  }
</style>
