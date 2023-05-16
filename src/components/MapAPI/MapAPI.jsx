import React, {useEffect} from 'react';

import DG from "2gis-maps";
const MapApi = () => {
        useEffect(() => {
            let map
            map = DG.map('map-container',{
                center:[42.875574, 74.58801],
                zoom:20
            })

            DG.marker([42.875574, 74.58801  ]).addTo(map)
        },[])
        return (
            <div id='map-container' style={{
                width:'100%',
                height:'100%'
            }}>
            </div>
    );
};

export default MapApi;