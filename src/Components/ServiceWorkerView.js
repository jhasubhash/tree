import React from 'react';
import { useSnackbar } from 'notistack';
import Button from '@material-ui/core/Button';

export default function ServiceWorkerView(props) {

    const isServiceWorkerInitialized = props.serviceWorker.serviceWorkerInitialized;
    const isServiceWorkerUpdated = props.serviceWorker.serviceWorkerUpdated;
    const serviceWorkerRegistration = props.serviceWorker.serviceWorkerRegistration;

    const { enqueueSnackbar, closeSnackbar } = useSnackbar();


    React.useEffect(() => {
        const updateServiceWorker = () => {
            const registrationWaiting = serviceWorkerRegistration.waiting;
            if (registrationWaiting) {
              registrationWaiting.postMessage({ type: 'SKIP_WAITING' });
              registrationWaiting.addEventListener('statechange', e => {
                if (e.target.state === 'activated') {
                  window.location.reload();
                }
              });
            }
        };
        const action = key => (
            <Button onClick={updateServiceWorker}>
                Update
            </Button>
        );
        if(isServiceWorkerInitialized){
            /*enqueueSnackbar("Service worker initialized",{ 
                variant: 'success',
            })*/
        }
        if(isServiceWorkerUpdated){
            enqueueSnackbar("There is a new version available",{ 
                variant: 'info',
                action,
            })
        }
    },[isServiceWorkerInitialized, isServiceWorkerUpdated, enqueueSnackbar, serviceWorkerRegistration]);

    return (
        <div>
        </div>
    )
}