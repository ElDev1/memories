import Swal from 'sweetalert2';

export const useLoginErrors = () => {
    const loginErrors = (text, icon) => {
        return Swal.fire({
            title: 'Error!',
            text,
            icon,
            confirmButtonText: 'OK'
        });
    };

    const logErrors = {
        USER_NOT_FOUND: 'auth/user-not-found',
        WRONG_PASS: 'auth/wrong-password',
        TOO_MANY_REQUESTS: 'auth/too-many-requests'
    };
    return { loginErrors, logErrors };
};
