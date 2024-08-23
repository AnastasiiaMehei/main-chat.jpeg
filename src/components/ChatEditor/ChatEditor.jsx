import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { useDispatch, useSelector } from "react-redux";
import { selectToken } from "../../redux/auth/selectors";
import { Toaster, toast } from "react-hot-toast";
import css from "./ChatEditor.module.css";
import { addChat } from "../../redux/chats/operations";

export default function ChatEditor({ onChatCreated }) {
  const dispatch = useDispatch();
  const token = useSelector(selectToken);

  const handleSubmit = (values, actions) => {
    const { name, surname } = values;
    const photo = `https://avatars.dicebear.com/api/initials/${name}-${surname}.svg`; // Генерация аватара
    console.log("Submitting chat:", values);
    if (name && surname) {
      if (token) {
        dispatch(addChat({ name, surname, photo }))
          .then(() => {
            toast.success("Chat added successfully");
            actions.resetForm();
            if (onChatCreated) {
              onChatCreated();
            }
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
    surname: Yup.string()
      .min(3, "Too Short")
      .max(50, "Too Long")
      .required("Required"),
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
                surname: "",
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
                  <div className={css.inputbox}>
                    <Field
                      className={css.field}
                      name="surname"
                      placeholder="Surname"
                    />
                    <ErrorMessage
                      className={css.span}
                      name="surname"
                      component="span"
                    />
                  </div>
                  <button
                    className={css.btn}
                    type="submit"
                    disabled={isSubmitting}
                  >
                    Add chat
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
