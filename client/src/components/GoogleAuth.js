import React from 'react';
import { connect } from 'react-redux';
import { signIn, signOut } from '../actions';

class GoogleAuth extends React.Component {
    componentDidMount() {
        window.gapi.load('client:auth2', () => {
            window.gapi.client
            .init({
                clientId: '424991632370-u5qf4nurcn29bdjtb40dgdjle973tr6i.apps.googleusercontent.com',
                scope: 'email'
            })
            .then(() => {
                this.auth = window.gapi.auth2.getAuthInstance();
                this.onAuthChange(this.auth.isSignedIn.get());
                this.auth.isSignedIn.listen(this.onAuthChange);
            })
        });
    }
    
    onAuthChange = (isSignedIn) => {
        if (isSignedIn) {
            this.props.signIn(this.auth.currentUser.get().getId());
        } else {
            this.props.signOut();
        }
    };

    onLoginClick = () => {
        this.auth.signIn();
    }

    onLogoutClick = () => {
        this.auth.signOut();
    }

    renderAuthButton() {
        if (this.props.isSignedIn === null) {
            return  <div></div>;
        } else if (this.props.isSignedIn) {
            return (
                <div>
                    <button onClick={this.onLogoutClick} className="google-button">
                        <i className="google icon" />
                        Logout
                    </button>
                </div>
            )
        } else {
            return (
                <div>
                    <button onClick={this.onLoginClick} className="google-button">
                        <i className="google icon" />
                        Login
                    </button>
                </div>
            );
        }
    }

    render() {
        return <div className="menu-item"> {this.renderAuthButton()} </div>;
    }
}

const mapStateToProps = (state) => {
    return {  isSignedIn: state.auth.isSignedIn }
}

export default connect(mapStateToProps, { signIn, signOut })(GoogleAuth);