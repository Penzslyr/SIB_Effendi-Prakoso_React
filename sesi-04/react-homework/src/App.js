import Header from './components/header'
import './App.css';
import Aboutmeetup from './components/aboutmeetup';
import Mainmeetup from './components/mainmeetup';
import NextMeetup from './components/NextMeetup';
import Members from './components/members';
import Pastmeetups from './components/pastmeetups';
import Footer from './components/footer';

function App() {
  return (
    <>
    <Header/>
    <Mainmeetup/>
    <h3 class="inline-left">Next Meetup</h3>
    <NextMeetup/>
    <h3 class="inline-left">About Meetup</h3>
    <Aboutmeetup/>
    <div class="container-inline">
      <h3 class="inline-left">Members</h3>
      <h3 class="inline-right">See All</h3>
    </div>
    <Members/>
    <div class="container-inline">
      <h3 class="inline-left">Past Meetups</h3>
      <h3 class="inline-right">See All</h3>
    </div>
    <Pastmeetups/>
    <Footer/>
    </>
  );
}

export default App;

