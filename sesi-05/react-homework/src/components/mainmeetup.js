import Button from 'react-bootstrap/Button';
import React, {useState} from 'react'

function Mainmeetup(props){
    //Use State Btn Join Us
    const [getBtnUSValue, setBtnUSValue] = useState("")

    const changeBtnUSValue = () => {
      setBtnUSValue("Joined");
    }
    return (
    <div className="meetup-now">
      
      <img className="img" src="https://1.bp.blogspot.com/-6Tu853QUcy0/Xo8uSdpkOLI/AAAAAAAALGE/jV2XheZmrxcj_U2Onp1ldjpHFLIvpNIdQCNcBGAsYHQ/s1600/HACKTIV8%2B%255Bwww.blogovector.com%255D.png"/> 
      
      <div className="text-meetup-now">
        <h3 >Hacktiv8 Meetup</h3>
        <p className ="desc-1">Location : Jakarta</p>
        <p className ="desc-1">Members : 1078</p>
        <p className ="desc-1">Organizers : Andy Wiranata</p>
        <Button onClick={()=>changeBtnUSValue()} className='m-auto' variant="primary" size="lg">{!getBtnUSValue ? "Join Us" : getBtnUSValue}</Button>{' '}
      </div>
      
    </div>
    
    )
}

export default Mainmeetup;