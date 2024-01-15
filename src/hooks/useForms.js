import { useState } from "react";

export const useForms = ( initialForm = {}) => {
    const [formState, setFormState] = useState(initialForm)
    // Function that will take any imput in the form and set it into the State
    const handleInputChange = ({target}) => {
        const {name, value} = target
        setFormState({...formState, [name]: value})
    }
    // Function that resets the form
    const resetForm = () => {
        setFormState(initialForm)
    }

    return {
        ...formState, formState, handleInputChange, resetForm
    }
    
}