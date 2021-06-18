import React from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { createUser } from '../reducers/users';

const UserForm = () => {
    const dispatch = useDispatch();
    const { register, handleSubmit } = useForm();
    const onSubmit = (formData) => {
        console.log(formData);
        dispatch(createUser(formData));
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <input {...register("name", { required: true })} />
            <input type="submit" />
        </form>
    )
}

export default UserForm;