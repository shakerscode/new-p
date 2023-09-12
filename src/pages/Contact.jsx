import { useEffect } from "react";
import ContactForm from "../components/contact/ContactForm";
import ContactTopSection from "../components/contact/ContactTopSection";
import FeedBack from "../components/contact/Feedback";
import JoinSlack from "../components/contact/JoinSlack";

export default function Contact() {

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
  }, []);

  return (
    <>
      <ContactTopSection />
      <FeedBack />
      <JoinSlack />
      <ContactForm />
    </>
  )
}
