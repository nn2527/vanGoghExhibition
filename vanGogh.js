//paintings from: https://www.vincentvangogh.org/
//My professor's codepen who helped me make this during his office hours: https://codepen.io/dmz2117/pen/KKyMJom?editors=0010 that guided me
//idea for placement of different components by classmate Pam's codepen: https://codepen.io/pt2574/pen/ZEabKJw
const App = Vue.createApp({
  data() {
    return {
      product: "Paintings",
      paintings: [
        {
          name: "Almond Blossoms",
          image:
            "https://micrio.vangoghmuseum.nl/iiif/rAERt/full/300,/0/default.webp?hash=bf6bAB5LriYZ0hm086u83ekgewbOTOp157Y7w8G6sPM",
          bgColor: "#009999",
          details: [
            "Oil on Canvas",
            "73.3 cm x 92.4 cm",
            "Saint-Rémy-de-Provence, February 1890"
          ]
        },
        {
          name: "Starry Night",
          image: "https://www.vangoghgallery.com/img/starry_night_full.jpg",
          bgColor: "#333399",
          details: [
            "Oil on Canvas",
            "74 cm X 92 cm",
            "Saint-Rémy-de-Provence, June 1889"
          ]
        },
        {
          name: "Cafe Terrace at Night",
          image:
            "https://www.vincentvangogh.org/images/paintings/cafe-terrace-at-night.jpg",
          bgColor: "#cc0099",
          details: [
            "Oil on Canvas",
            "80.7 cm X 65.3 cm",
            "Saint-Rémy-de-Provence, September 1888"
          ]
        },
        {
          name: "Irises",
          image: "https://www.vincentvangogh.org/images/paintings/irises.jpg",
          bgColor: "#0000ff",
          details: [
            "Oil on Canvas",
            "71 cm X 93 cm",
            "Saint-Rémy-de-Provence, January 1889"
          ]
        },
        {
          name: "The Bedroom at Arles",
          image:
            "https://www.vincentvangogh.org/images/paintings/the-bedroom-at-arles.jpg",
          bgColor: "#e60000",
          details: ["Oil on Canvas", "72 cm X 90 cm", "Arles, France, 1888"]
        },
        {
          name: "Vase with Daisies and Poppies",
          image:
            "https://www.vincentvangogh.org/images/paintings/vase-with-daisies-and-poppies.jpg",
          bgColor: "#29a329",
          details: [
            "Oil on Canvas",
            "66 cm X 51 cm",
            "Auvers-sur-Oise, July 1890"
          ]
        },
        {
          name: "The Yellow House",
          image:
            "https://www.vincentvangogh.org/images/paintings/the-yellow-house.jpg",
          bgColor: "#cc0066",
          details: [
            "Oil on Canvas",
            "76 cm X 94 cm",
            "Arles, France, June 1888"
          ]
        },
        {
          name: "Sunflowers",
          image:
            "https://www.vincentvangogh.org/images/paintings/sunflowers.jpg",
          bgColor: "#ff6600",
          details: [
            "Oil on Canvas",
            "92.1 cm X 73 cm",
            "Arles, France, June 1888"
          ]
        },
        {
          name: "At Eternitys Gate",
          image:
            "https://www.vincentvangogh.org/images/paintings/at-eternitys-gate.jpg",
          bgColor: "#6666ff",
          details: ["Oil on Canvas", "80 cm X 64 cm", "May 1890"]
        },
        {
          name: "Self Portrait",
          image:
            "https://www.vincentvangogh.org/images/paintings/self-portrait.jpg",
          bgColor: "#ff5050",
          details: ["Oil on Canvas", "65 cm X 54 cm", "1889"]
        },
        {
          name: "Tree Roots",
          image:
            "https://www.vincentvangogh.org/images/paintings/tree-roots.jpg",
          bgColor: "#339966",
          details: [
            "Oil on Canvas",
            "50 cm X 100 cm",
            "Auvers-sur-Oise, France, July 1890"
          ]
        },
        {
          name: "Portrait of Dr. Gachet",
          image:
            "https://www.vincentvangogh.org/images/paintings/portrait-of-dr-gachet.jpg",
          bgColor: "#660066",
          details: ["Oil on Canvas", "67 cm x 56 cm", "June 1890 at Auvers"]
        }
      ]
    };
  }
});

App.component("painting", {
  props: ["painting"],
  data() {
    //Jianan helped with this. Source of reference: https://css-tricks.com/snippets/javascript/random-hex-color/
    return {
      loveCount: 0,
      color: "#" + Math.floor(Math.random() * 16777215).toString(16)
      //so that random colors get generated else in my code above you can see I have individual bacground color to each painting
    };
  },
  methods: {
    reactWithLove() {
      this.loveCount++;
    }
  },
  template: `<div class="paintingz" v-bind:style="{ backgroundColor: color}">
    <img class="paintingSize" :src="painting.image">
    <div class="painting-details"></div>
      <div class="name">
        <h3>{{ painting.name }}</h3>
      </div>
    <ul>
      <li v-for="detail in painting.details">{{ detail }}</li>
    </ul>
      <button class="button" v-on:click="reactWithLove">❤️ #{{ loveCount }} </button>
    </div>
    `
});

App.mount("#app");
