// must restart server whenever you make changes in next.config
module.exports = {
  env: {
    MONGO_SRV: "mongodb+srv://ammar:123456ammar@hackyourshop-cjald.mongodb.net/test?retryWrites=true&w=majority",
    JWT_SECRET: "hackyourshop",
    CLOUDINARY_URL: "https://api.cloudinary.com/v1_1/drwxqbum1/image/upload",
    STRIPE_SECRET_KEY: "sk_test_k7ZHHPo1OOgE7DmZhVS5lc2g00Y8eJmzAt"
  }
};
