<template>
  <v-app>
    <v-app-bar app dense>
      <template v-slot:extension>
        <v-tabs v-model="model" centered>
          <v-tab v-for="(tab, i) in tabs" :key="i" :href="`#tab-${tab.title}`">
            {{ tab.title }}
          </v-tab>
        </v-tabs>
      </template>
    </v-app-bar>

    <v-main>
      <v-tabs-items v-model="model">
        <v-tab-item
          v-for="tab in tabs"
          :key="tab.title"
          :value="`tab-${tab.title}`"
          class="text-center"
        >
          <v-card max-width="300">
            <v-list rounded>
              <v-list-item
                v-for="(item, i) in tab.items"
                :key="i"
                :href="item.link"
                link
                selectable
                target="_blank"
                color="light-blue"
              >
                <v-list-item-content>
                  <v-list-item-title v-text="item.title"></v-list-item-title>
                </v-list-item-content>
              </v-list-item>
            </v-list>
          </v-card>
        </v-tab-item>
      </v-tabs-items>
    </v-main>
  </v-app>
</template>

<script>
export default {
  data() {
    return {
      model: 1,
      names: ["Common", "Tools", "ura"],
      tabs: [
        {
          title: "Common",
          items: [
            {
              title: "Frank的五四三 (blogger)",
              link: "https://franks543.blogspot.com/",
            },
            {
              title: "Японская музыка",
              link: "https://fujirou.blogspot.com/",
            },
            {
              title: "Frank的五四三 (GitHub Pages)",
              link: "https://franklai.github.io/franks543",
            },
            {
              title: "Ext JS test page (GitHub Pages)",
              link: "https://franklai.github.io/franks543/ext",
            },
          ],
        },
        {
          title: "Tools",
          items: [
            {
              title: "Converter",
              link: "https://franklai.github.io/franks543/js/U2B_oneLine.htm",
            },

            {
              title: "Dictionaries",
              link: "https://franklai.github.io/franks543/js/dic.htm",
            },
            {
              title: "P幣扣稅計算程式",
              link: "https://franklai.github.io/franks543/js/ptt_tax.htm",
            },
            {
              title: "Lyric Search",
              link: "https://franklai.github.io/franks543/js/lyric_search.htm",
            },
            {
              title: "橫書轉直書",
              link: "https://franklai.github.io/franks543/js/h2v.htm",
            },
          ],
        },
        {
          title: "うら",
          items: [
            {
              title: "jpopsuki 2.0",
              link: "https://jpopsuki.eu/",
            },
            {
              title: "share.dmhy.org",
              link: "http://share.dmhy.org/",
            },
            {
              title: "cili001.com",
              link: "http://cili001.com/",
            },
            {
              title: "Nipponsei Tracker",
              link: "https://nipponsei.minglong.org/tracker/",
            },
            {
              title: "yts.mx",
              link: "https://yts.mx/",
            },
            {
              title: "1337X",
              link: "https://1337x.to/",
            },
          ],
        },
      ],
    };
  },
};
</script>