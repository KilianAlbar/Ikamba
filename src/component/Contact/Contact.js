import React from "react";

// ==== Styles ====

import './Contact.css';

// ==== Dependencies ====

import { useForm } from "react-hook-form";
import { useTranslation } from "react-i18next";

export default function Contact(){
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = data => console.log(data);
    const { t } = useTranslation();

    return(
        <div className="contact">
            <div className="contactInfo">
                <h2>{t("Contact")}</h2>
                <h4>{t("ContactAdress")}</h4>
                <p>IKAMBA Organics
                    <br/>
                   39 Rue des Granges Galand
                    <br/>
                   B.P. 60414
                    <br/>
                   37550 Saint Avertin Cedex
                </p>
            </div>
            <div>
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="contactForm">
                <div  className="contactFullName">
                    <input defaultValue="First Name" {...register("FirstName", { required: true })} />
                    <input defaultValue="Last Name" {...register("LastName", { required: true })} />
                </div>
                    <input defaultValue="Organisation" {...register("Organisation")} />
                    <input defaultValue="Email" {...register("Email", { required: true })} />
                    <input defaultValue="Phone" {...register("Phone", { required: true })} />
                    <input defaultValue="Message" {...register("Message", { required: true })} />
                    {/* errors will return when field validation fails  */}
                    {errors.exampleRequired && <span>This field is required</span>}
              </div>    
                <input className="contactSubmit" type="submit" />
            </form>
            </div>
        </div>
    )
}

