import Swal from 'sweetalert2';


import { createUserWithEmailAndPassword, getAuth,  signInWithEmailAndPassword,  signInWithPopup, signOut, updateProfile } from '@firebase/auth';
import { provider } from '../firebase/firebase-config';
import { types } from '../types/types';
import { finishLoading, startLoading } from './ui';
import { noteLogout } from './notes';


export const startLoginEmailPassword = (email, password) => {
    const auth = getAuth();
    return (dispatch) => {
        dispatch( startLoading() );
        
        
        signInWithEmailAndPassword( auth, email, password)
            .then( ({user}) => {  
                dispatch( login( user.uid, user.displayName ) )
                dispatch( finishLoading() );
            })
            .catch( e => {
                console.log( e );
                dispatch( finishLoading() );
                Swal.fire('Error', e, 'error')
            })

    }
}

export const startRegisterWithEmailPasswordName = ( email, password, name ) => {
    const auth = getAuth();
    return ( dispatch ) => {
        createUserWithEmailAndPassword( auth, email, password )
            .then( async({user}) => {      
                // await user.updateProfile({ displayName: name })
                await updateProfile(auth.currentUser, {displayName: name})
                console.log(user);
                dispatch(  login(user.uid, user.displayName) )
            })
            .catch( e => {
                console.log(e);
                Swal.fire('Error', 'Error', 'error');
            } )
        
    }
}


export const startGoogleLogin = () => {

    const auth = getAuth();
    return ( dispatch ) => {
        signInWithPopup(auth, provider)
            .then(({user}) => {
                dispatch(
                    login(user.uid, user.displayName)
                )
            })
        
    }
}


export const login = ( uid, displayName ) => ({
    type: types.login,
    payload: {
        uid,
        displayName
    }
});


export const startLogout = () => {

    const auth = getAuth();
    return async( dispatch ) => {
        await signOut(auth);   

        dispatch( logout() );
        dispatch( noteLogout() );
    }
}

export const logout = () => ({
    type: types.logout
})