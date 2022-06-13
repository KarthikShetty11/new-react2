import React from "react";

function Content(){
    return(
    <form>
        <label for="userNotes">Notes:</label><br/>
        <input type="text" id="userNotes" name="username" value="" placeholder="Type here" />
    <br />
        <div class="input-group">
            <div class="input-group-prepend">
            <span class="input-group-text">Notes:</span>
            </div>
            <textarea class="form-control" aria-label="With textarea"></textarea>
        </div>
    </form>
    )
}

export default Content;