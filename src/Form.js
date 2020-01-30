import React from 'react'
import { Formik, Field, Form } from 'formik';

const MyForm = () => {
    const handleSubmit = () => {
        debugger
    }
    return (
        <Formik
            initialValues={{ name: '', age: '' }}
            onSubmit={handleSubmit}
            render={props => {
                console.log(props);
                return(
                    <Form>
                        <Field name='name' type='text' placeholder='enter name'/>
                        <Field name='age' type='text' placeholder='enter age'/>

                        <input type='submit'/>
                    </Form>
                )
            }}
        />    
    );
}

export default MyForm;