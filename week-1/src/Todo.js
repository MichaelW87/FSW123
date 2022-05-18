import React from "react";

function todo(){
    var cb = { width:'20px'}
    return(
        <div className='TodoDiv'>
            <div><input id='cb1' type='checkbox' /></div>
            <div><label for="cb1">Stream Apex</label></div>

            <div><input id='cb1' type='checkbox' /></div>
            <div><label for="cb1">Do Laundry</label></div>

            <div><input id='cb1' type='checkbox' /></div>
            <div><label for="cb1">Food Shopping</label></div>

            <div><input id='cb1' type='checkbox' /></div>
            <div><label for="cb1">Do Homework</label></div>

        </div>
    )
}
export default todo;