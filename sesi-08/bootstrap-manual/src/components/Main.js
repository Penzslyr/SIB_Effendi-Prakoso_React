import Content from './template/Content'
import Footer from './template/Footer'
import Header from './template/Header'

function Main(){
    return(
        <>
        <Header/>
        <div className="container">
            <Content/>
        </div>
        <Footer/>
        </>
    )
}

export default Main