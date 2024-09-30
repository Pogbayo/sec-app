import { FaCircleCheck } from "react-icons/fa6";
import { useState } from "react";
import { z, ZodType } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

const MailValue: string = "";
type mailValue = {
  mail: string;
};

const schema: ZodType<mailValue> = z.object({
  mail: z.string().email(),
});

const Container = () => {
  const [mail, setMail] = useState(MailValue);

  const updateMail = (event: React.ChangeEvent<HTMLInputElement>): void => {
    setMail(event.target.value);
  };

  const submitData = (data: mailValue) => {
    setMail("");
    console.log(data, "name:Adesanya Adebayo");
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
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
              value={mail}
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
