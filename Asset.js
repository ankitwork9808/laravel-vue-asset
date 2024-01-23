export const Asset = {
  install(app) {
    app.config.globalProperties.asset = (src) => {
      try {
          const urlRegex = /^(http|https):\/\/[^ "]+$/;
          if(urlRegex.test(src)){
            return src
          }
          const asset_url = import.meta.env.VITE_ASSET_URL
          if(asset_url) {
            if(src?.startsWith("/")){
              src = src.substring(1)
            }
            src = asset_url+src;
          }else{
              console.error(`VITE_ASSET_URL("${asset_url}") is not defined in .env`)
          }

          return src;
        } catch (error) {
          console.error(error)
          
          return src;
      }
    };
  },
};