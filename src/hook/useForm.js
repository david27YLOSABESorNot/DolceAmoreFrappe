import { useState } from "react"
import { useNavigate } from "react-router-dom";



export  const useForm = (initialForm = {}) => {

    

    const [formState, setFormState] = useState(initialForm);
    const [alertEmpty, setAlertEmpty] = useState(false);
    const [alertEmail, setAlertEmail] = useState(false);

    const navigate = useNavigate();

    const onInputChange = ({target}) => {

        const {name, value} = target;

        setFormState({
            ...formState,
            [name] : value
        })

    }

    const validateForm = (e) => {
        e.preventDefault();


        const {nombre, apellidos, email, password} =  formState;
        const evaluation =  /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/;

        if(nombre.length === 0 || apellidos.length === 0 || email.length === 0 || password.length === 0){
            setAlertEmpty(true);

            setTimeout(() => {
                setAlertEmpty(false);
            }, 3000);

            return;
        }
        else if(!evaluation.test(email)){
            setAlertEmail(true);

            setTimeout(() => {
                setAlertEmail(false);
            }, 3000);
        }

        navigate('/inicio', {
            replace: true
        })



    }

    return {

        ...formState,
        onInputChange,
        validateForm,
        alertEmpty,
        alertEmail

    }

}