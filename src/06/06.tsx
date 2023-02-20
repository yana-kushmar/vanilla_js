import React, {ChangeEvent, MouseEvent} from "react";


export const User = () => {

    const search = (event: MouseEvent<HTMLButtonElement>) => {
        //alert("user deleted")
    }



    const onNameChanged = () => {
        console.log("name changed")
    }
    const onAgeChanged = ( event: ChangeEvent<HTMLInputElement> ) => {
        console.log("age changed:" + event.currentTarget.value)
    }

    const focusHasLostHandler = () => {
        console.log("focus has lost")
    }

    return (
        <div>
            <textarea
                onChange={onNameChanged}
                onBlur={focusHasLostHandler}
            >Dimych</textarea>

            <input onChange={onAgeChanged} type={"number"}/>

            <button  name="search" onClick={search}>search</button>

        </div>
    )
}