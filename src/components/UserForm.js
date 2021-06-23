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
            <div id = 'User-Submit'>
            <h3>Add User</h3>
            <input {...register("name", { required: true })} />
            <input type="submit" />
            </div>
        </form>
    )
}

export default UserForm;