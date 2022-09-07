import Button from 'react-bootstrap/Button';

function Mainmeetup(){
    return (
    <div className="meetup-now">
      
      <img className="img" src="https://1.bp.blogspot.com/-6Tu853QUcy0/Xo8uSdpkOLI/AAAAAAAALGE/jV2XheZmrxcj_U2Onp1ldjpHFLIvpNIdQCNcBGAsYHQ/s1600/HACKTIV8%2B%255Bwww.blogovector.com%255D.png"/> 
      
      <div className="text-meetup-now">
        <h3 >Hacktiv8 Meetup</h3>
        <p className ="desc-1">Location : Jakarta</p>
        <p className ="desc-1">Members : 1078</p>
        <p className ="desc-1">Organizers : Andy Wiranata</p>
        <Button className='m-auto' variant="primary" size="lg">Join Us</Button>{' '}
      </div>
      
    </div>
    
    )
}

export default Mainmeetup;