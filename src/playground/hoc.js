import React from 'react';
import ReactDOM from 'react-dom';

const Info = (props) => (
    <div>
        <h1>Info</h1>
        <p>The info is {props.info}</p>
    </div>
);

const withAdminWarning = (WrappedComponent) => {
    return (props) => (
        <div>
            {props.isAdmin && <p>This is private info. Please don't share.</p>}
            <WrappedComponent {...props}/>
        </div>
    );
};

const requireAuthentication = (WrappedComponent) => {
    return (props) => (
        <div>
            { 
                !props.isAuthenticated ? 
                    (<a href="#">Login</a>) 
                    :  (<WrappedComponent {...props}/>) 
            }
        </div>
    );
};

const AdminInfo = withAdminWarning(Info);
const AuthenticatedInfo = requireAuthentication(Info);
//ReactDOM.render(<AuthenticatedInfo isAdmin={true} info="hehehe" />, document.getElementById("app"));
ReactDOM.render(<AuthenticatedInfo isAuthenticated={false} info="hehehe" />, document.getElementById("app"));