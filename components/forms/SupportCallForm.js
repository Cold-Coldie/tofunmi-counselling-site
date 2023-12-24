import React, { useRef, useState } from "react";
import styles from "./SupportCallForm.module.css";
import { toast } from "react-hot-toast";

const SupportCallForm = ({ showSupportCall, setShowSupportCall }) => {
  const fullNameRef = useRef(null);
  const emailRef = useRef(null);
  const genderRef = useRef(null);
  const reasonRef = useRef(null);

  const [submitText, setSubmitText] = useState("SUBMIT");

  const handleSubmit = async () => {
    if (
      !fullNameRef.current.value ||
      !emailRef.current.value ||
      !genderRef.current.value ||
      !reasonRef.current.value
    ) {
      toast("Please, complete the form to proceed.", { icon: "🙂" });
      return;
    }

    const data = {
      fullName: fullNameRef.current.value,
      email: emailRef.current.value,
      gender: genderRef.current.value,
      reason: reasonRef.current.value,
    };

    setSubmitText("Submitting...");

    try {
      const response = await fetch("/api/sendCallSupportEmail", {
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
            <label htmlFor="">Reason</label>
            <textarea
              name=""
              id=""
              cols="30"
              rows="3"
              ref={reasonRef}
            ></textarea>
          </div>

          <div className={styles.formNote}>
            <div>Price: &#8358;2000 (NGN).</div>
            <div>
              Account details will be sent to you when your request is received.
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

export default SupportCallForm;
