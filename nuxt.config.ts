// https://nuxt.com/docs/api/configuration/nuxt-config

export default defineNuxtConfig({
    css: [
        '@/assets/styles/global.scss',
        '@fortawesome/fontawesome-svg-core/styles.css'
    ],
    modules: [
      '@nuxt/image-edge',
     ],
     build: {
      transpile: [
        '@fortawesome/vue-fontawesome',
        '@fortawesome/fontawesome-svg-core',
        '@fortawesome/pro-solid-svg-icons',
        '@fortawesome/pro-regular-svg-icons',
        '@fortawesome/free-brands-svg-icons'
      ]
    },
    image: {
        // dir: 'public/images/',
        provider: 'twicpics',
        twicpics: {
          baseURL: 'http://royalw31.beget.tech/images/'
        }
      },
    app: {
      head: {
        title: 'Royal-Wood | Деревянная мебель на заказ в Москве | Изготовление мебели по размерам из массива дерева под заказ',
        htmlAttrs: {
          lang: 'ru',
        },
        meta: [
          { charset: 'utf-8' },
          { name: 'viewport', content: 'width=device-width, initial-scale=1' },
          { hid: 'description', name: 'description', content: '' },
          { name: 'format-detection', content: 'telephone=no' },
        ], 
        link: [
          { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      ], 
        script: [
                  {type: 'module',  hid: "stripe", src: "https://code.jquery.com/jquery-3.5.1.min.js", defer: true, },
                  {type: 'module',  hid: "stripe", src: "/js/jquery.maskedinput.js", defer: true,  },
                  {type: 'module',  hid: "stripe", src: "/js/jquery.validate.min.js", defer: true, },
                  {type: 'module',  hid: "stripe", src: "/js/script.js", defer: true, },           
                ]
      },
    },
})
