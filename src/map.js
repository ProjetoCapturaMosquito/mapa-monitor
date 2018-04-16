import React, { Component } from 'react';
import { Map, TileLayer, Marker, Popup } from 'react-leaflet';
import { Sidebar, Tab } from 'react-leaflet-sidebarv2';
import 'leaflet/dist/leaflet.css';
import './map.css';
import './sidebar.css';
import L from 'leaflet';
delete L.Icon.Default.prototype._getIconUrl;

L.Icon.Default.mergeOptions({
    iconRetinaUrl: require('leaflet/dist/images/marker-icon-2x.png'),
    iconUrl: require('leaflet/dist/images/marker-icon.png'),
    shadowUrl: require('leaflet/dist/images/marker-shadow.png'),
});

class MapContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            collapsed: true,
            selected: '',
            lat: -15.505,
            lng: -47.09,
            zoom: 13,
            markers: [[-15.5051, -47.091]],
            latMarker: 0,
            lngMarker: 0,
        };
        this.handleChange1 = this.handleChange1.bind(this);
        this.handleChange2 = this.handleChange2.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange1(event) {
        this.setState({ latMarker: event.target.value });
    }
    handleChange2(event) {
        this.setState({ lngMarker: event.target.value });
    }

    handleSubmit(event) {
        const {markers} = this.state;
        console.log({markers});
        console.log(this.state.latMarker);
        let position = [this.state.latMarker, this.state.lngMarker];
        console.log(position);
        markers.push(position);
        this.setState({markers});
        event.preventDefault();
    }

    onClose() {
        this.setState({
            collapsed: true,
            selected: '',
        });
    }
    onOpen(id) {
        this.setState({
            collapsed: false,
            selected: id,
        })
    }

    render() {
        const position = [this.state.lat, this.state.lng]
        return (
            <div>
                <Sidebar id="sidebar" collapsed={this.state.collapsed} selected={this.state.selected}
                    onOpen={this.onOpen.bind(this)} onClose={this.onClose.bind(this)}>
                    <Tab id="home" header="Home" icon="fa fa-home">
                        <p>No place like home!</p>
                    </Tab>
                    <Tab id="messages" header="Máquinas" icon="fa fa-plus-square" className="disabled">
                        <p>Cadastre novas máquinas:</p>
                        <form onSubmit={this.handleSubmit}>
                            <label>
                                Latitude:
                            <input type="text" value={this.state.latMarker} onChange={this.handleChange1} />
                            </label>
                            <label>
                                Longitude:
                            <input type="text" value={this.state.lngMarker} onChange={this.handleChange2} />
                            </label>
                            <input type="submit" value="Submit" />
                        </form>
                    </Tab>
                    <Tab id="settings" header="Settings" icon="fa fa-cog" anchor="bottom">
                        <p>Settings dialogue.</p>
                    </Tab>
                </Sidebar>
                <Map className="sidebar-map" center={position} zoom={this.state.zoom}>
                    <TileLayer
                        attribution="&amp;copy <a href=&quot;http://osm.org/copyright&quot;>OpenStreetMap</a> contributors"
                        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    />
                    {this.state.markers.map((position, idx) =>
                        <Marker key={`marker-${idx}`} position={position}>
                            <Popup>
                                <span>Máquina de mosquito {position}</span>
                            </Popup>
                        </Marker>
                    )}
                </Map>
            </div>
        )
    }
}

export default MapContainer;