import React, { useRef, useState } from "react";
import styles from "./SupportCallForm.module.css";
import { toast } from "react-hot-toast";

const ParentGroupForm = ({ showSupportCall, setShowSupportCall }) => {
  const fullNameRef = useRef(null);
  const emailRef = useRef(null);
  const genderRef = useRef(null);
  const howLongRef = useRef(null);

  const [submitText, setSubmitText] = useState("SUBMIT");
  const [isParent, setIsParent] = useState(false);

  const handleSubmit = async () => {
    if (
      !fullNameRef.current.value ||
      !emailRef.current.value ||
      !genderRef.current.value
    ) {
      toast("Please, complete the form to proceed.", { icon: "🙂" });
      return;
    }

    if (
      fullNameRef.current.value &&
      emailRef.current.value &&
      genderRef.current.value &&
      !isParent
    ) {
      toast("Sorry, You're not eligible to join this group.", { icon: "🙁" });
      return;
    }

    if (
      fullNameRef.current.value &&
      emailRef.current.value &&
      genderRef.current.value &&
      isParent &&
      !howLongRef.current.value
    ) {
      toast("Please, complete the form to proceed.", { icon: "🙂" });
      return;
    }

    const data = {
      fullName: fullNameRef.current.value,
      email: emailRef.current.value,
      gender: genderRef.current.value,
      isParent,
      howLong: howLongRef.current.value,
    };

    setSubmitText("Submitting...");

    try {
      const response = await fetch("/api/sendParentGroupEmail", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        setSubmitText("Submitted");
        toast("Submission Successful!", { icon: "✅" });
        setShowSupportCall(false);
      } else {
        toast("Ooops! An error occured. Please try again", { icon: "🥺" });
        setSubmitText("SUBMIT");
      }
    } catch (error) {
      toast("Ooops! An error occured. Please try again", { icon: "🥺" });
      setSubmitText("SUBMIT");
    }
  };

  return (
    <div
      onClick={() => {
        setShowSupportCall((s) => !s);
      }}
      className={styles.formBackDrop}
    >
      <div
        className={styles.formWrapper}
        onClick={(e) => {
          e.stopPropagation();
        }}
      >
        <div className={styles.formContainer}>
          <div className={styles.formInputWrapper}>
            <label htmlFor="">Full Name:</label>
            <input type="text" ref={fullNameRef} required />
          </div>

          <div className={styles.formInputWrapper}>
            <label htmlFor="">Email</label>
            <input type="email" ref={emailRef} required />
          </div>

          <div className={styles.formInputWrapper}>
            <label htmlFor="">Gender</label>
            <select name="gender" id="" ref={genderRef}>
              <option value="">Select Gender</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
            </select>
          </div>

          <div className={styles.formInputWrapper}>
            <label class={styles.container}>
              {" "}
              Are you married or a single parent?
              <input
                type="checkbox"
                onClick={() => {
                  setIsParent((s) => !s);
                }}
              />
              <span class={styles.checkmark}></span>
            </label>
          </div>

          {isParent ? (
            <div className={styles.formInputWrapper}>
              <label htmlFor="">If Yes, For How Long?</label>
              <input type="text" ref={howLongRef} required />
            </div>
          ) : (
            <></>
          )}

          <div className={styles.formNote}>
            <div>
              The group link will be sent to your E-mail once this message is
              recieved.
            </div>
          </div>

          <div className={styles.formFooter}>
            <div>
              <button
                className={styles.formCancel}
                onClick={() => {
                  setShowSupportCall(false);
                }}
              >
                Cancel
              </button>
              <button className={styles.formSubmit} onClick={handleSubmit}>
                {submitText}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ParentGroupForm;
