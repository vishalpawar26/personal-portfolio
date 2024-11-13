import React, { useEffect, useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import useStore from "@/store/store";
import CloseButton from "./CloseButton";
import Link from "next/link";
import { formArray } from "@/constants";

type Inputs = {
  fullName: string;
  email: string;
  subject: string;
  message: string;
};

const ContactForm = () => {
  const { isContactFormOpen, setIsContactFormOpen } = useStore();
  const [isProcessing, setIsProcessing] = useState(false);
  const [notification, setNotification] = React.useState<string | null>(null);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<Inputs>({
    defaultValues: {
      fullName: "",
      email: "",
      subject: "",
      message: "",
    },
  });

  useEffect(() => {
    if (isContactFormOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
      setNotification(null);
      reset();
    }

    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isContactFormOpen, reset]);

  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    if (!isContactFormOpen) return;

    try {
      setIsProcessing(true);
      const response = await fetch("/api/sendEmail", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        setNotification("Email sent successfully!");
        reset();
      } else {
        setNotification("Failed to send email");
      }
    } catch (error) {
      setNotification("Internal server error");
    } finally {
      setIsProcessing(false);
      setTimeout(() => setNotification(null), 5000);
    }
  };

  const handleClose = () => {
    setIsContactFormOpen();
  };

  if (!isContactFormOpen) return null;

  return (
    <div className="fixed inset-0 top-0 z-40 flex h-full w-full min-w-80 items-center justify-center bg-neutral-900/50 p-4 backdrop-blur-xl">
      {/* Notification */}
      {notification && (
        <div className="absolute bottom-8 right-8 rounded-xl border border-neutral-700 bg-neutral-800 px-6 py-4 opacity-100 transition-opacity duration-300">
          {notification}
        </div>
      )}

      {/* Form */}
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex w-full flex-col gap-4 rounded-3xl bg-background p-6 py-6 shadow-2xl sm:w-[32rem] sm:px-8"
      >
        {/* Close Button */}
        <CloseButton onClick={handleClose} />

        {/* Name, Email & Subject Fields */}
        {formArray.map((field) => (
          <div key={field.label} className="flex w-full flex-col gap-1">
            <p className="text-sm">{field.label} *</p>
            <input
              type={field.type}
              autoComplete="off"
              placeholder={field.placeholder}
              {...register(field.register, { required: true })}
              className="w-full rounded-lg bg-neutral-900 px-4 py-3 text-foreground placeholder-neutral-500 outline-none focus:border focus:border-neutral-700"
            />
            {errors[field.register] && (
              <span className="text-xs text-red-500">Required</span>
            )}
          </div>
        ))}

        {/* Message Textarea */}
        <div className="flex w-full flex-col gap-1">
          <p className="text-sm">Message *</p>
          <textarea
            id="message"
            rows={2}
            placeholder="Ideas on enhancing user experience in online shopping."
            {...register("message", { required: true })}
            className="w-full resize-none rounded-lg bg-neutral-900 px-4 py-3 text-foreground placeholder-neutral-500 outline-none focus:border focus:border-neutral-700"
          />
          {errors.message && (
            <span className="text-xs text-red-500">Required</span>
          )}
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          disabled={isProcessing}
          className="mt-2 w-full gap-4 rounded-full border border-blue-600 bg-blue-600 px-8 py-3 transition-colors duration-500 hover:bg-neutral-900 disabled:cursor-wait"
        >
          {isProcessing ? "Sending..." : "Send Message"}
        </button>

        {/* Email Option */}
        <p className="mb-2 text-center text-xs text-neutral-400">
          Don't like forms?{" "}
          <Link
            href="mailto:vishalpawar1784@gmail.com"
            target="_blank"
            className="text-neutral-300 hover:underline"
          >
            vishalpawar1784@gmail.com
          </Link>
        </p>
      </form>
    </div>
  );
};

export default ContactForm;
