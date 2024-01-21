export const Asset = {
  install(app) {
    app.config.globalProperties.asset = (src) => {
      try {
          const urlRegex = /^(http|https):\/\/[^ "]+$/;
          if(urlRegex.test(src)){
            return src
          }
          
          if(import.meta?.env?.VITE_ASSET_URL) {
            src = import.meta.env.VITE_ASSET_URL+src;
          }else{
              console.error('VITE_ASSET_URL is not defined in .env')
          }

          return src;
        } catch (error) {
          console.error(error)
          
          return src;
      }
    };
  },
};