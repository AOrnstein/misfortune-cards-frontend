const API = import.meta.env.VITE_API;

/**
 * Convert the image url fragments into full static URL addresses
 * @param {string} urlFragment
 * @returns {string} full static card image URL
 */
export default function cardImgUrl(urlFragment) {
  const url = new URL(urlFragment, API);
  return url.toString();
}
