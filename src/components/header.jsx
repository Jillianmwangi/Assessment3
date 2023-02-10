import React from "react";
import { useState } from "react";

function displayHeader(){
    const [hideHeader, sethideHeader] = useState(false)
    return(
        <div>
            <header>
                <button onClick={() => sethideHeader(!hideHeader)}>Show/Hide</button>
                {hideHeader && <p>This is the header component</p>}
            </header>
        </div>
    );
};
export default displayHeader