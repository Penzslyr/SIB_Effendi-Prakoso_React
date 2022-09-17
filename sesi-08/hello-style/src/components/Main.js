import External from "./External"
import ExternalCssModule from "./ExternalCssModule"
import ExternalObjectVariable from "./ExternalObjectVariable"
import InlineCss from "./InlineCss"
import ObjectVariableCss from "./ObjectVariableCss"
import StyledComponent from "./StyledComponent"

const Main = () => {
    return(
        <div>
            <p>Belajar Styling Component</p>
            <InlineCss/>
            <ObjectVariableCss/>
            <External/>
            <ExternalCssModule/>
            <ExternalObjectVariable/>
            <StyledComponent/>
        </div>
    )
}

export default Main