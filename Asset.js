export const Asset = {
    install(app) {
      app.config.globalProperties.$asset = (src) => {
        try {
            const urlRegex = /^(http|https):\/\/[^ "]+$/;
        
            if(urlRegex.test(src)){
              return src
            }
            
            if(import.meta.env.VITE_ASSET_URL) {
              src = import.meta.env.VITE_ASSET_URL+src;
            }
        
            return src;
          } catch (error) {
            return src;
        }
      };
    },
};
