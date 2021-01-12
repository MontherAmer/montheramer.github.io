import React from 'react';
import { Map } from 'pigeon-maps';

const MAP_ID = process.env.REACT_APP_MAP_ID;
const MAPTILER_ACCESS_TOKEN = process.env.REACT_APP_MAPTILER_ACCESS_TOKEN;

const mapTilerProvider = (x, y, z, dpr) => {
  return `https://api.maptiler.com/maps/${MAP_ID}/256/${z}/${x}/${y}${dpr >= 2 ? '@2x' : ''}.png?key=${MAPTILER_ACCESS_TOKEN}`;
};
export default ({ handlePosition }) => {
  const handleClick = ({ latLng }) => handlePosition(latLng);
  return <Map defaultZoom={3} defaultCenter={[32.22111, 35.25444]} provider={mapTilerProvider} dprs={[1, 2]} onClick={handleClick}></Map>;
};
