import { useState } from "react";
import toast, { Toaster } from "react-hot-toast";

const Newsletter = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const re =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (!re.test(email)) {
      toast.error("Invalid email", {
        duration: 2000,
        icon: "❌",
      });
    } else {
      toast("Thank you for subscribing!", {
        duration: 2000,
        icon: "✅",
      });
    }

    setFirstName("");
    setLastName("");
    setEmail("");
    setPhone("");
    setSubject("");
    setMessage("");
  };

  return (
    <section id="newsletter" className="pb-24 text-cyan-50">
      <div className="mx-auto max-w-7xl space-y-8 rounded-xl bg-cyan-950 p-8 text-center">
        <div className="text-center">
          <h2 className="text-4xl font-bold uppercase">Join BYO </h2>
          <hr className="mx-auto my-2 h-px w-1/4 border-0 bg-gray-200"></hr>
          <p className="text-2xl">
            Ready to start your entrepreneurial journey?
          </p>
        </div>
        <div className="grid grid-cols-2 gap-x-2 gap-y-4 text-cyan-950">
          <input
            type="text"
            placeholder="First name"
            className="rounded-full p-4"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
          />
          <input
            type="text"
            placeholder="Last name"
            className="rounded-full p-4"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
          />
          <input
            type="text"
            placeholder="Email"
            className="rounded-full p-4"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="text"
            placeholder="Phone number"
            className="rounded-full p-4"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />
          <input
            type="text"
            placeholder="Subject"
            className="col-span-2 rounded-full p-4"
            value={subject}
            onChange={(e) => setSubject(e.target.value)}
          />
          <textarea
            placeholder="Tell us something..."
            className="col-span-2 rounded-full p-4"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          ></textarea>
        </div>
        <button
          onClick={handleSubmit}
          className="rounded-full bg-cyan-500 px-8 py-4 hover:bg-cyan-600"
        >
          Send to BYO
        </button>
        <Toaster position="bottom-right" reverseOrder={false} gutter={8} />
      </div>
    </section>
  );
};

export default Newsletter;
