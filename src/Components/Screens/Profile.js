import React from 'react';

const Profile = () => {
    return(
        <div style={{maxWidth:"550px", margin:"0px auto"}}>
            <div style={{
                display:"flex", 
                justifyContent:"space-around",
                margin:"18px 0px",
                borderBottom:"1px solid grey"
            }}>
                <div>
                    <img style={{width:"160px", height:"160px", borderRadius:"80px"}}
                    // src="https://images.unsplash.com/photo-1548946526-f69e2424cf45?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MzB8fHBlcnNvbnxlbnwwfDJ8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
                    />
                </div>
                <div>
                    <h4>Vinay Bhat</h4>
                    <div style={{display:"flex", justifyContent:"space-between", width:"108%"}}>
                        <h6>40 projects</h6>
                        <h6>40 Assigned Task</h6>
                        <h6>40 Compeleted Task</h6>

                    </div>
                </div>
            </div>
        <div className="gallery">
            {/* <img className="item" src="https://images.unsplash.com/photo-1548946526-f69e2424cf45?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MzB8fHBlcnNvbnxlbnwwfDJ8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"></img>   */}
            {/* <img className="item" src="https://images.unsplash.com/photo-1548946526-f69e2424cf45?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MzB8fHBlcnNvbnxlbnwwfDJ8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"></img>   */}
            
        </div>
        </div>
    )
}

export default Profile;