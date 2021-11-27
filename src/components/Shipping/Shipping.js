import React from 'react';
import { useForm } from 'react-hook-form';
import useAuth from './../../hooks/useAuth';

const Shipping = () => {
    const { user } = useAuth();
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = data => console.log(data);

    console.log(watch("example"));
    return (
        <div className="container mt-4 w-50">
            <form onSubmit={handleSubmit(onSubmit)}>

                <div className="from-group my-4">
                    <label htmlFor="">Your Name</label>
                    <input className="form-control" defaultValue={user.displayName} {...register("name", { required: true })} />
                    {errors.name && <span className="text-danger">Name field is required</span>}
                </div>
                <div className="from-group my-4">
                    <label htmlFor="">Your Email</label>
                    <input className="form-control" defaultValue={user.email} {...register("email", { required: true })} />
                    {errors.email && <span className="text-danger">Email field is required</span>}
                </div>
                <div className="from-group my-4">
                    <label htmlFor="">Phone Number</label>
                    <input className="form-control" placeholder="+8801X XXXXXXXX"  {...register("phone", { required: true })} />
                    {errors.phone && <span className="text-danger">Phone no. is required</span>}
                </div>
                <div className="form-group my-4 row">
                    <div className="col">
                        <input className="form-control" placeholder="Address 1" {...register("address1")} />
                    </div>
                    <div className="col">
                        <input className="form-control" placeholder="Address 2" {...register("address2")} />
                    </div>
                </div>


                <input className="btn btn-warning" type="submit" />
            </form>
        </div>
    );
};

export default Shipping;