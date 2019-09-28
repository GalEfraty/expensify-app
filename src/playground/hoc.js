//hoc = higher order component:
import React from 'react'
import ReactDOM from 'react-dom'

const Info = (props) => (
    <div>
        <h1>Info</h1>
        <p>The info is: {props.info}</p>
    </div>
)

const withAdminWarning = (WarppedComponent) => {
    return (props) => (
        <div>
            {props.isAdmin && <p>This is private info. Please don't share!</p>}
            <WarppedComponent {...props} />
        </div>
)}

const requiredAuthentication = (WarppedComponent) => {
    return (props) => (
        <div>
            {props.isAuthenticated ? 
                (<WarppedComponent {...props}/>)
                                    :
                (<p>Please login to view the info</p>)
            }
        </div>
    )
}

const InfoWithAdminWarning = withAdminWarning(Info)
const InfoWithAuth = requiredAuthentication(Info)

//ReactDOM.render(<InfoWithAdminWarning isAdmin={true} info={'some info details'}/>, document.getElementById('app'))
ReactDOM.render(<InfoWithAuth isAuthenticated={false} info={'some info details'}/>, document.getElementById('app'))