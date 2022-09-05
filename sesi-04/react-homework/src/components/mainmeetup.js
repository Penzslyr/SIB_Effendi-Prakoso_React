import Button from 'react-bootstrap/Button';

function Mainmeetup(){
    return (
    <div class="meetup-now">
      
      <img class="img" src="https://1.bp.blogspot.com/-6Tu853QUcy0/Xo8uSdpkOLI/AAAAAAAALGE/jV2XheZmrxcj_U2Onp1ldjpHFLIvpNIdQCNcBGAsYHQ/s1600/HACKTIV8%2B%255Bwww.blogovector.com%255D.png"/> 
      
      <div class="text-meetup-now">
        <h3 >Hacktiv8 Meetup</h3>
        <p class ="desc-1">Location : Jakarta</p>
        <p class ="desc-1">Members : 1078</p>
        <p class ="desc-1">Organizers : Andy Wiranata</p>
        <Button className='m-auto' variant="primary" size="lg">Join Us</Button>{' '}
      </div>
      
    </div>
    
    )
}

export default Mainmeetup;