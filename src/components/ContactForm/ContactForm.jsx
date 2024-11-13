import { Formik, Form, Field, ErrorMessage } from "formik";
import { nanoid } from "nanoid";
import * as Yup from "yup";
import s from "./ContactForm.module.css";

const FeedbackSchema = Yup.object().shape({
  name: Yup.string()
    .min(3, "The field cannot be less than 3 characters")
    .max(50, "The field cannot be more than 50 characters")
    .required("This field is required"),
  number: Yup.string()

    .min(3)
    .max(50)
    .required("This field is required"),
});
const nameId = nanoid(2);
const numberId = nanoid(2);

const ContactForm = ({ onAdd }) => {
  const handleSubmit = (values, actions) => {
    const newContact = {
      id: nanoid(),
      name: values.name,
      number: values.number,
    };
    onAdd(newContact);
    actions.resetForm();
  };

  return (
    <Formik
      validationSchema={FeedbackSchema}
      onSubmit={handleSubmit}
      initialValues={{ name: "", number: "" }}
    >
      <Form className={s.form}>
        <label htmlFor={nameId}>
          <span>Name</span>
        </label>
        <Field className={s.name} type="text" id={nameId} name="name" />
        <ErrorMessage name="name" component="span" />

        <label htmlFor={numberId}>
          <span>Number</span>
        </label>
        <Field className={s.number} type="text" name="number" />
        <ErrorMessage name="number" component="span" />

        <button className={s.btn} type="submit">
          Add contact
        </button>
      </Form>
    </Formik>
  );
};
export default ContactForm;