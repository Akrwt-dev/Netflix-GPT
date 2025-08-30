export const LOGO =
  "https://help.nflxext.com/helpcenter/OneTrust/oneTrust_production_2025-07-24/consent/87b6a5c0-0104-4e96-a291-092c11350111/019808e2-d1e7-7c0f-ad43-c485b7d9a221/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png";

export const USER_AVTAR =
  "https://tse3.mm.bing.net/th/id/OIP.AxyqdoS8aXzECQd2_DmmCgHaG2?pid=Api&P=0&h=180";

export const API_OPTION = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization: "Bearer " + process.env.REACT_APP_TMDB_KEY,
  },
};

export const IMG_CDN_URL = "https://image.tmdb.org/t/p/w500";

export const BG_URL =
  "https://assets.nflxext.com/ffe/siteui/vlv3/258d0f77-2241-4282-b613-8354a7675d1a/web/IN-en-20250721-TRIFECTA-perspective_cadc8408-df6e-4313-a05d-daa9dcac139f_small.jpg";

export const SUPPORTED_LANGUAGE = [
  { identifire: "en", name: "English" },
  { identifire: "hindi", name: "Hindi" },
  { identifire: "spanish", name: "Spanish" },
];

export const GEMINI_KEY = process.env.REACT_APP_GEMINI_KEY;
