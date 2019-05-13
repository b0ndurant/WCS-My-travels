import React from 'react';

const trips = [
    {
        destinations: "Rio",
        country: "Brésil",
        picture: "https://lepetitjournal.com/sites/default/files/styles/main_article/public/2018-03/Br%C3%A9sil.jpg?itok=KPPBy_Qc",
        distance: 8620,
    },
    {
        destinations: "Dubai",
        country: "Emirats arabes unis",
        picture: "https://images.salaun-holidays.com/(Image)-image-emirats-arabes-unis-abu-dhabi-01-is_517465184.jpg",
        distance: "6702 km",
    },
    {
        destinations: "Paris",
        country: "France",
        picture: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e6/Paris_Night.jpg/713px-Paris_Night.jpg",
        distance: 200,
    },
    {
        destinations: "Londre",
        country: "Angleterre",
        picture: "https://www.lonelyplanet.fr/sites/lonelyplanet/files/styles/manual_crop/public/media/destination/slider/mobile/500px_55425108_2.jpg?itok=FM16--08",
        distance: 500,
    },
    {
        destinations: "Rome",
        country: "Italie",
        picture: "https://www.nacel.fr/medias/_cache/pays/17/imagePrincipale/1920_1440/sejour-linguistique-italie.jpg",
        distance: 1575,
    },
]
const Travel = ({ destinations, country, picture, distance }) => {
    return (
        trips.map(trip => (
            <div className="col-md-4">
                <div>Destinations : {trip.destinations}</div>
                <div>Pays : {trip.country}</div>
                <div>Image : <img src={trip.picture} alt="Brazil" /></div>
                <div>Distance : {trip.distance} km</div>
            </div>
        ))
    )
}

export default Travel