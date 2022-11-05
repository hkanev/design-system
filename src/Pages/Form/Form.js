import { React, useState } from "react";
import {Form} from "../../Components/Form/Form";
import {formConf} from "../../Components/Form/conf";

const FormPage = () => {
    function submitForm(formState) {
        console.log(formState);
    }

   return (
       <div className="main">
           <Form formData={formConf} submitForm={submitForm} />
       </div>
   )
};

export default FormPage;
