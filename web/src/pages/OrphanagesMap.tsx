import React from 'react';
import {Link} from  'react-router-dom';
import { FiArrowRight, FiPlus } from 'react-icons/fi';
import { Map, TileLayer, Marker, Popup } from 'react-leaflet';

import '../styles/pages/orphanages-map.css';

import mapMarkerImg from '../images/Local.svg';

function OrphanagesMap(){
    return(
        <div id="page-map">
            <aside>
                <header>
                    <img src={mapMarkerImg} alt="Happy"></img>

                    <h2>escolha um orfanato no mapa</h2>
                    <p>Muitas crianças estão esperando a sua visita :)</p>
                </header>
           

            <footer>
                <strong>Guarda</strong>
                <span>Guarda</span>
            </footer>
            </aside>

            <Map
            center={[-18.9430125,-48.294186]}
            zoom={15}
            style={{width:'100%', height:'100%'}}
            >
                 { /*<TileLayer url="https://a.title.openstreetmap.org/{z}/{x}/{y}.png"></TileLayer> */ }

                 <TileLayer url={`https://api.mapbox.com/styles/v1/mapbox/light-v10/tiles/256/{z}/{x}/{y}@2x?access_token=${process.env.REACT_APP_MAPBOX_TOKEN}`}
        />

            </Map>

            <Link to="" className="create-orphanage">
                <FiPlus size={32} color="#FFF"></FiPlus>
            </Link>
        </div>
    )
}

export default OrphanagesMap;