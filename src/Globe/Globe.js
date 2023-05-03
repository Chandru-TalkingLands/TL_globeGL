import "../Globe/Globe.css";
import Globe from "react-globe.gl";
import { useState, useEffect, useRef } from "react";

export default function Earth() {
  const [labels, setLabels] = useState(); 
  const h = window.innerHeight;
  const shiftFactor = 0.1;
  const shiftAmmount = shiftFactor * h;
  const globeEl = useRef();

  // const handleClick = (event, globeEl) => {
  //   console.log("HIii")
  //   if(globeEl.current){
  //     const latlng = globeEl.current.getCoords(event.clientX, event.clientY);
  //     const lat = latlng?.lat;
  //     const lng = latlng?.lng;
  //     const radius = globeEl.current.opts?.cameraDistance;
  //     const position = {
  //       x: radius * Math.sin(lat) * Math.cos(lng),
  //       y: radius * Math.sin(lat) * Math.sin(lng),
  //       z: radius * Math.cos(lat)
  //     };
  //     globeEl.current.camera()?.position.setLength(globeEl.current.camera().position.length(position.x, position.y, position.z));
  //   }
  // }

  useEffect(() => {
    const filePath = "https://tl-dev2-app-files.s3.ap-south-1.amazonaws.com/store/world_population.json"
    fetch(filePath).then(res => res.json() ).then(({ features }) => {
      setLabels(features)
      console.log(features)
    })
  },[]) 

  useEffect(() => {
    if (globeEl.current) {
      globeEl.current.controls().enablePan = true
      globeEl.current.controls().autoRotate = false;
      globeEl.current.controls().enableZoom = false;
      globeEl.current.controls()
      globeEl.current.controls().autoRotateSpeed = 1.5;
      globeEl.current.pointOfView({lat: 20.5, lng: 78.9, altitude: 2}, 4000);
    }
  }, [globeEl.current]);

  const getTooltip = de =>{
    let d = de.properties
  return ` 
  <div style="text-align: center">
   <div><b>Place:${d.name}</b>, ${d.sov0name}</div> 
   <div>Population: <em>${d.pop_other}</em></div> 
  </div> `
}

  return (
    <>
    <section className='earth' >
    <div>
    <Globe
        ref={globeEl}
        height={h + shiftAmmount}
        globeImageUrl="https://tl-dev2-app-files.s3.ap-south-1.amazonaws.com/store/MicrosoftTeams-image+(15).png"
        showAtmosphere="false"
        backgroundColor="black"
        atmosphereAltitude={0.14}
        // onGlobeClick={handleClick}
        pointLabel={getTooltip}
        labelsData={labels}
        labelLat={d => d.properties.latitude}
        labelLng={d => d.properties.longitude}
        labelText={d => (d.properties.name + ' ' +(d.properties.pop_other))}
        labelSize={0.5}
        labelDotRadius={d => Math.sqrt(d.properties.pop_max) * 4e-4}
        labelColor={() => 'rgba(255, 165, 0, 0.75)'}
        labelResolution={2}
        labelLabel={getTooltip}
      />
    </div>
    </section>
    <section className='content'>
    </section>
    </>
  );
}