import styled from "styled-components"

const Div = styled.div`
    background-color: red;
    padding: 30px;
    font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
    
`
const StyledComponent = () => {
    return(
        <div>
            <Div>
                <h1>Hello styled component</h1>
            </Div>
        </div>
    )
}

export default StyledComponent