import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { useDispatch, useSelector } from "react-redux";
import { addChat } from "../../redux/contacts/operations";
import { selectToken } from "../../redux/auth/selectors";
import { Toaster, toast } from "react-hot-toast";
import css from "./ChatEditor.module.css";

export default function ContactEditor() {
  const dispatch = useDispatch();
  const token = useSelector(selectToken);

  const handleSubmit = (values, actions) => {
    const { name } = values;
    console.log("Submitting chat:", values);
    if (name) {
      if (token) {
        dispatch(addContact({ name }))
          .then(() => {
            toast.success("Chat added successfully");
            actions.resetForm();
          })
          .catch(() => {
            toast.error("Failed to add chat");
          });
      } else {
        alert("You must be logged in to add a chat.");
      }
    }
  };

  const validationSchema = Yup.object().shape({
    name: Yup.string()
      .min(3, "Too Short")
      .max(50, "Too Long")
      .required("Required"),
    // phone: Yup.string()
    //   .min(6, "Too Short")
    //   .max(50, "Too Long")
    //   .required("Required"),
  });

  return (
    <>
      <Toaster />
      <section className={css.section}>
        <div className={css.formBox}>
          <div className={css.formValue}>
            <Formik
              initialValues={{
                name: "",
                // phone: "",
              }}
              validationSchema={validationSchema}
              onSubmit={handleSubmit}
            >
              {({ isSubmitting }) => (
                <Form className={css.form}>
                  <h2>Add Chat</h2>
                  <div className={css.inputbox}>
                    <Field
                      className={css.field}
                      name="name"
                      placeholder="Name"
                    />
                    <ErrorMessage
                      className={css.span}
                      name="name"
                      component="span"
                    />
                  </div>
                  {/* <div className={css.inputbox}>
                    <Field
                      className={css.field}
                      name="phone"
                      placeholder="Phone"
                    />
                    <ErrorMessage
                      className={css.span}
                      name="phone"
                      component="span"
                    />
                  </div> */}
                  <button
                    className={css.btn}
                    type="submit"
                    disabled={isSubmitting}
                  >
                    Add contact
                  </button>
                </Form>
              )}
            </Formik>
          </div>
        </div>
      </section>
    </>
  );
}
