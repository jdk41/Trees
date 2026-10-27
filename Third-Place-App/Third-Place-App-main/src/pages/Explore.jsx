import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet'
import 'leaflet/dist/leaflet.css'
import '../leafletIcons.js'
import cafeIcon from '../assets/icon-cafe.svg'
import parkIcon from '../assets/icon-park.svg'
import libraryIcon from '../assets/icon-library.svg'
import gymIcon from '../assets/icon-gym.svg'

const categories = [
  { label: 'Cafes', icon: cafeIcon, alt: 'Cafe icon' },
  { label: 'Parks', icon: parkIcon, alt: 'Park icon' },
  { label: 'Libraries', icon: libraryIcon, alt: 'Library icon' },
  { label: 'Gyms', icon: gymIcon, alt: 'Gym icon' },
]

const losAngeles = [34.0522, -118.2437]

function Explore() {
  return (
    <main className="explore-page">
      <h2>Explore</h2>

      <div className="search-bar">
        <input type="text" placeholder="Search for a place" />
        <button>Search</button>
      </div>

      <div className="categories">
        {categories.map((category) => (
          <button key={category.label}>
            <img src={category.icon} alt={category.alt} />
            {category.label}
          </button>
        ))}
      </div>

      <MapContainer id="map" center={losAngeles} zoom={11}>
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution="&copy; OpenStreetMap contributors"
        />
        <Marker position={losAngeles}>
          <Popup>Example Place</Popup>
        </Marker>
      </MapContainer>
    </main>
  )
}

export default Explore
