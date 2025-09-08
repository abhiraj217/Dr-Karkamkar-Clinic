import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import "./ContactForm.scss";
import { EMERGENCY_CONTACT_NUMBER } from "../../utils/Constant";
import { getCurrentDateFormatted, whatsAppBotListener } from "../../utils/Utils";
import { FaPhoneAlt } from "react-icons/fa";

// Validation schema using Yup
const ContactFormSchema = Yup.object().shape({
    name: Yup.string()
        .min(2, "Name is too short")
        .max(50, "Name is too long")
        .required("Name is required"),
    email: Yup.string()
        .email("Invalid email address")
        .required("Email is required"),
    service: Yup.string().required("Please select a service"),
    age: Yup.string().required("Age is required"),
});

const ContactForm = () => {
    const initialValues = {
        name: "",
        email: "",
        service: "Teeth Whitening",
        age: "",
        message: "",
    };

    const handleSubmit = (values, { setSubmitting, resetForm }) => {
        // Format the values as a string with line breaks
        const formattedString =
            `Ivory Multispeciality Dental Clinic  \n` +
            `Appointment Booking \n \n` +
            `Date: ${getCurrentDateFormatted()}\n` +
            `Name: ${values.name}\n` +
            `Age: ${values.age}\n` +
            `Email: ${values.email}\n` +
            `Service: ${values.service}\n` +
            `Message: ${values.message}`;

        console.log("Form values:");
        console.log(formattedString);

        whatsAppBotListener(formattedString);

        // Simulate API call
        setTimeout(() => {
            resetForm();
            setSubmitting(false);
        }, 1000);
    };

    return (
        <Formik
            initialValues={initialValues}
            validationSchema={ContactFormSchema}
            onSubmit={handleSubmit}
        >
            {({ isSubmitting, errors, touched }) => (
                <Form>
                    <div className="row">
                        <div className="col-lg-6">
                            <div className="form-group">
                                <label htmlFor="name">Name</label>
                                <Field
                                    type="text"
                                    name="name"
                                    className={`form-control ${
                                        errors.name && touched.name
                                            ? "is-invalid"
                                            : ""
                                    }`}
                                    placeholder="Enter your name..."
                                />
                                <ErrorMessage
                                    name="name"
                                    component="div"
                                    className="invalid-feedback"
                                />
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="form-group">
                                <label htmlFor="name">Age</label>
                                <Field
                                    type="number"
                                    name="age"
                                    className={`form-control ${
                                        errors.age && touched.age
                                            ? "is-invalid"
                                            : ""
                                    }`}
                                    placeholder="Enter your age..."
                                />
                                <ErrorMessage
                                    name="age"
                                    component="div"
                                    className="invalid-feedback"
                                />
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="form-group">
                                <label htmlFor="email">E-mail Address</label>
                                <Field
                                    type="email"
                                    name="email"
                                    className={`form-control ${
                                        errors.email && touched.email
                                            ? "is-invalid"
                                            : ""
                                    }`}
                                    placeholder="Enter email address..."
                                />
                                <ErrorMessage
                                    name="email"
                                    component="div"
                                    className="invalid-feedback"
                                />
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="form-group">
                                <label htmlFor="service">Service</label>
                                <Field
                                    as="select"
                                    name="service"
                                    className={`form-control ${
                                        errors.service && touched.service
                                            ? "is-invalid"
                                            : ""
                                    }`}
                                >
                                    <option value="Root Canal">
                                        Root Canal
                                    </option>
                                    <option value="Dentures">Dentures</option>
                                    <option value="Implants">Implants</option>
                                    <option value="Whitening">Whitening</option>

                                    <option value="Extraction">
                                        Extraction
                                    </option>
                                    <option value="Aligners">Aligners</option>
                                    <option value="Braces">Braces</option>
                                    <option value="Fillings">Fillings</option>
                                </Field>
                                <ErrorMessage
                                    name="service"
                                    component="div"
                                    className="invalid-feedback"
                                />
                            </div>
                        </div>

                        <div className="col-lg-12">
                            <div className="form-group">
                                <label htmlFor="message">Messages</label>
                                <Field
                                    as="textarea"
                                    name="message"
                                    className={`form-control ${
                                        errors.message && touched.message
                                            ? "is-invalid"
                                            : ""
                                    }`}
                                    placeholder="Enter your messages..."
                                    rows="3"
                                />
                                <ErrorMessage
                                    name="message"
                                    component="div"
                                    className="invalid-feedback"
                                />
                            </div>
                        </div>

                        <div className="col-lg-6">
                            <button
                                type="submit"
                                className="btn appointment-btn"
                                disabled={isSubmitting}
                            >
                                {isSubmitting
                                    ? "Submitting..."
                                    : "Book an appointment"}
                            </button>
                        </div>
                        <div className="col-lg-6">
                            <div className="appointment-call">
                                <div className="icon">
                                    <FaPhoneAlt />
                                </div>
                                <div className="call-text">
                                    <p>Open even on sunday</p>
                                    <h6>{EMERGENCY_CONTACT_NUMBER}</h6>
                                </div>
                            </div>
                        </div>
                    </div>
                </Form>
            )}
        </Formik>
    );
};

export default ContactForm;
