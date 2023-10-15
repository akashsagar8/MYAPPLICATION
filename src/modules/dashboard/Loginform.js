
import React ,{Fragment} from 'react'

function Loginform() {
  return (
    <Fragment>
        <div id="butn" style={{position:"fexed",marginLeft:"770px"}} >
            <button class=" btn bg-info" data-bs-toggle="modal" data-bs-target="#exampleModal" data-bs-whatever="@mdo">Login</button>
            <button class="ms-1 btn bg-info " data-bs-toggle="modal" data-bs-target="#exampleModal" data-bs-whatever="@fat">signUp</button>
            </div>
            <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog">
                <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="exampleModalLabel">New message</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    <form>
                    <div class="mb-3">
                        <label for="recipient-name" class="col-form-label">Recipient:</label>
                        <input type="text" class="form-control" id="recipient-name"/>
                    </div>
                    <div class="mb-3">
                        <label for="message-text" class="col-form-label">Message:</label>
                        <textarea class="form-control" id="message-text"></textarea>
                    </div>
                    </form>
                </div>
                <div class="modal-footer" style={{float:"right", marginLeft:"750px"}}>
                    <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                    <button type="button" className="btn btn-primary">Send message</button>
                </div>
                </div>
            </div>
            </div>

</Fragment>
  )
}

export default Loginform
