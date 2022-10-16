import { useFormik } from "formik"
import { useState } from "react";

const validate = values => {
    const errors = {};
    if (!values.name) {
      errors.name = 'Required';
    } else if (values.name.length < 1) {
      errors.name = 'Please include a name with your message';
    }
    if (!values.email) {
      errors.email = 'Required';
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
      errors.email = 'Invalid email address';
    }
    if (!values.subject) {
        errors.subject = 'Required';
    } else if (values.subject.length < 2) {
        errors.subject = 'Please include a subject line with your message';
    }
    if (!values.message) {
        errors.message = 'Required';
    } else if (values.message.length < 5) {
        errors.message = 'Please include a message';
    }
    return errors;
  };

const ContactForm = () => {
    const [validateAfterSubmit, setValidateAfterSubmit] = useState(false)
    const formik = useFormik({
        initialValues: {
            name: "",
            email: "",
            subject: "",
            message: "",
        },
        validate,
        validateOnBlur: validateAfterSubmit,
        validateOnChange: validateAfterSubmit,
        onSubmit: values => {
            alert(JSON.stringify(values, null, 2));
            formik.handleReset()
        },
    })
    return (
        <form onSubmit={formik.handleSubmit} className="margin-block-end-96">
            <div className="grid-two-column margin-block-end-24">
                <div className="flex-column">
                    <label className={formik.errors.name ? "error" : null} htmlFor="name">name</label>
                    <input className={formik.errors.name ? "error" : null} type="text" name="name" id="name" onChange={formik.handleChange} value={formik.values.name} />
                    {formik.errors.name ? <div className="error | fw-bold">{formik.errors.name}</div> : null}
                </div>
                <div className="flex-column">
                    <label className={formik.errors.email ? "error" : null} htmlFor="email">email</label>
                    <input className={formik.errors.email ? "error" : null} type="email" name="email" id="email" onChange={formik.handleChange} value={formik.values.email} />
                    {formik.errors.email ? <div className="error | fw-bold">{formik.errors.email}</div> : null}
                </div>
            </div>
            <div className="flex-column margin-block-end-24">
                <label className={formik.errors.subject ? "error" : null} htmlFor="subject">subject</label>
                <input className={formik.errors.subject ? "error" : null} type="text" name="subject" id="subject" onChange={formik.handleChange} value={formik.values.subject} />
                {formik.errors.subject ? <div className="error | fw-bold">{formik.errors.subject}</div> : null}
            </div>
            <div className="flex-column margin-block-end-24">
                <label className={formik.errors.message ? "error" : null} htmlFor="message">message</label>
                <textarea className={formik.errors.message ? "error" : null} name="message" id="message" cols="30" rows="10" onChange={formik.handleChange} value={formik.values.message}></textarea>
                {formik.errors.message ? <div className="error | fw-bold">{formik.errors.message}</div> : null}
            </div>
            <button onClick={() => {setValidateAfterSubmit(true)}} className="btn submit underline | fs-600 fw-bold padding-inline-24 margin-inline-start-24 show" type="submit">send message</button>
        </form>
    )
}

export default ContactForm