import { createUserWithEmailAndPassword, GoogleAuthProvider, signInWithEmailAndPassword, signInWithPopup, updateProfile } from 'firebase/auth'
import { FirebaseAuth } from './config'

const googleProvider = new GoogleAuthProvider()

export const signInWithGoogle = async () => {
    try {
        const result = await signInWithPopup(FirebaseAuth, googleProvider)
        // const credentials = GoogleAuthProvider.credentialFromResult(result)
        const {displayName, email, photoURL, uid } = result.user

        return {
            ok: true,

            displayName, email, photoURL, uid
        }


    } catch (err) {
        const errorMessage = err.message

        return {
            ok: false,
            errorMessage
        }
    }
}

export const registerUserWithEmailPassword = async ({ email, password, displayName }) => {
    try {
        const res = await createUserWithEmailAndPassword(FirebaseAuth, email, password)
        const { uid, photoURL } = res.user

        await updateProfile(FirebaseAuth.currentUser, {displayName})
        
        return {
            ok: true,
            uid, photoURL, email, displayName
        }

    } catch (err) {
        const errorMessage = err.message
        return { ok: false, errorMessage}
    }
}

export const loginWithEmailPassword = async ({email, password}) => {

    try {
        const res = await signInWithEmailAndPassword(FirebaseAuth, email, password)
        const { uid, photoURL, displayName } = res.user

        return {
            ok: true,
            uid, photoURL, displayName
        }

    } catch (err) {
        return { ok: false, errorMessage: err.message }
    }
}

export const logoutFirebase = async() => {
    return await FirebaseAuth.signOut()
}