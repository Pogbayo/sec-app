import { FaCircleCheck } from "react-icons/fa6";
import { z, ZodType } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import emailjs from "emailjs-com";

type mailValue = {
  mail: string;
};

const schema: ZodType<mailValue> = z.object({
  mail: z.string().email(),
});

const Container = () => {
  const submitData = (data: mailValue) => {
    console.log(data, "name:Adesanya Adebayo");
    reset();
    const userEmail = data.mail;
    const userName = userEmail.split("@")[0];
    const publicKey = "fZab5skM3kS9JSPtg";
    emailjs
      .sendForm("service_4dcwyzd", "template_u12wotc", userName, publicKey)
      .then((res) => {
        console.log(res);
        alert("Your newsletter subscription was successful");
      })
      .catch((err) => console.log(err));
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<mailValue>({
    resolver: zodResolver(schema),
  });

  return (
    <main className="container">
      <div className="firstCon">
        <div className="firstConInDiv">
          <section className="sec1">Stay updated!</section>
          <p className="sec2">
            Join 60,000+ product managers receiving monthly updates on:{" "}
          </p>
        </div>
        <div className="secConInDiv">
          <section className="secDiv">
            <FaCircleCheck className="icon" />
            <p className="p1">Product discovery and building what matters</p>
          </section>
          <section className="secDiv">
            <FaCircleCheck className="icon" />
            <p className="p2">Measuring to ensure updates are a success</p>
          </section>
          <section className="secDiv">
            <FaCircleCheck className="icon" />
            <p className="p3">And much more!</p>
          </section>
        </div>
        <div className="thirdConInDiv">
          <p className="email">Email address</p>
          <form onSubmit={handleSubmit(submitData)}>
            <input
              type="email"
              className="input"
              placeholder="email@company.com"
              {...register("mail")}
            />
            {errors.mail && <span>{errors.mail.message}</span>}
            <button type="submit">Subscribe to monthly newsletter</button>
          </form>
        </div>
      </div>
      <div className="secCon"></div>
    </main>
  );
};

export default Container;
