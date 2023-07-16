

const IpAddresInfo = ({ location }) => {

    console.log(location);
  return (
   <div className='ipaddres__location'>
    <div>
        <p>IP ADDRESS</p>
        <h3>{location?.IPv4}</h3>
    </div>
    <div>
        <p>LOCATION</p>
        <h3>{location?.city}-{location?.postal}</h3>
    </div>
    <div>
        <p>COUNTRY</p>
        <h3>{location?.country_name}-{location?.country_code}</h3>
    </div>
   </div >
  )
}

export default IpAddresInfo