import React from 'react';
import {Formik, Form, Field,ErrorMessage} from 'formik';

const PortraitForm = ({photo}) => {
    return(
        <div>
            <h5>Paula Pangan</h5>
            <h1>{photo.name}</h1>
            <h1>{`${photo.price} Php`}</h1>


            <Formik
            initialValues={{ email: '', password: '' }}
            validate={values => {
                const errors = {};
                if (!values.email) {
                errors.email = 'Required';
                } else if (
                !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
                ) {
                errors.email = 'Invalid email address';
                }
                return errors;
            }}
            onSubmit={(values, { setSubmitting }) => {
                setTimeout(() => {
                alert(JSON.stringify(values, null, 2));
                setSubmitting(false);
                }, 400);
            }}
            >
            {({
         values,
         errors,
         touched,
         handleChange,
         handleBlur,
         handleSubmit,
         isSubmitting,
         /* and other goodies */
       }) => (
         <form onSubmit={handleSubmit} className="ui form">
             <div className="field">
                <label htmlFor="size">Size:</label>
                <select name="size" onChange={handleChange} onBlur={handleChange} value={values.size}>
                    <option id="a4">a4</option>
                    <option id="a3">a3</option>
                    <option id="a2">a2</option>
                </select>  
             </div>
             
            <div className="field">
                <label htmlFor="location">Outside Philippines(no frame option only)</label>
            <input
             type="text"
             name="locaton"
             onChange={handleChange}
             onBlur={handleBlur}
             value={values.location}
           />
            </div>
           
           {/* {errors.email && touched.email && errors.email} */}
           <div className="field">
               <label htmlFor="quantity">Quantity:</label>
               <div style={{display:'flex'}}>
           <input
             type="number"
             name="quantity"
             onChange={handleChange}
             onBlur={handleBlur}
             value={values.password}
           />
           <button type="submit" disabled={isSubmitting}>
             ADD TO CART
           </button>
           </div>
           </div>
           
           {errors.password && touched.password && errors.password}
           
         </form>
       )}
            </Formik>
        </div>
    )
}

export default PortraitForm;