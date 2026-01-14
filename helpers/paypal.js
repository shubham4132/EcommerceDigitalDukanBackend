const paypal = require("paypal-rest-sdk");
paypal.configure({
  mode: "sandbox",
  client_id:
    "AUDqngYPHFX__8c77Ma_eUomy9ojjSNaGZnQ8QRHpol92f_DV6i1rOb2jiKMgi3w7UuWzzB-6rDv8Mkp",
  client_secret:
    "EBiJolb-if_faQqRyrT7MrC2qzckEPmpZ7F7mf1_uCJivt7tYrILL9f4CiF1-2wlzJwoI-cBY6UydmcO",
});

module.exports = paypal;
