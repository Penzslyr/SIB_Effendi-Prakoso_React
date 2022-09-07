
function Header(props){
    const changeLogin = () => {
        console.log("btn nya aman");
    }

    return (
        <>
            <ul>
            <li><a href="Qtemu.asp">{props.navTitle}</a></li>
            <li><a href="Meetup.asp">{props.navText}</a></li>
            <li><a href="Explore.asp">{props.navText2}</a></li>
            <li onClick={()=>changeLogin()} className="login"><a href="login.asp">{props.navLogin}</a></li>
            </ul>
        </>

    );
}

export default Header;