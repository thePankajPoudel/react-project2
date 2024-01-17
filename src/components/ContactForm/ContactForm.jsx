
import Button from "../button/button";
import styles from "./Contact.module.css";
import { MdMessage } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";
import { HiMail } from "react-icons/hi";
import { useState } from "react";

const ContactForm = () => {
    // using of use state hook
    const [name, setName] = useState("default name");
    const [email, setEmail] = useState("default email");
    const [text, setText] = useState("default text");




    const onSubmit=(event)=>{
       
      event.preventDefault(); // preventss browser from reloading
   
   setName(event.target[0].value);
   setEmail ( event.target[1].value);
   setText ( event.target[2].value);

       
    };
  return (
    <section className={styles.container}>
     <div className={styles.contact_form}>
        <div className={styles.top_btn}>
        <Button text="VIA SUPPORT CHAT"icon={<MdMessage fontSize="24px" /> }/>
        <Button 

        text="VIA CALL"icon={<FaPhoneAlt   fontSize="24px"/> }/>
        </div>
        <Button 
        isOutline={true}
        text="VIA EMAIL FORM"icon={<HiMail    fontSize="24px"/> }/>
      <form 
     onSubmit={onSubmit} >
     <div className={styles.form_control}> <label htmlFor="name">Name</label>
        <input type="text" name="name" /></div>
        <div className={styles.form_control}>
        <label htmlFor="email">Email</label>
        <input type="email" name="email" /></div>
     
        <div className={styles.form_control}>
        <label htmlFor="text">Text</label>
        <textarea name="text"  rows="8"/></div>
      <div 
      style={{
      display : "flex",
      justifyContent :"end" ,   
           }}
       >
        <Button text="SUBMIT BUTTON"/>
      </div>
      <div>
        {
          name + " "+ email + " " + text
        }
      </div>
      </form>

     </div>
      <div className={styles.contact_Image}>
        <img src="/images/contact.svg" alt="contact image" />
      </div>
      
    </section>
  );
};

export default ContactForm;
