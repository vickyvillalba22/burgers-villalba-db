import Image from "next/image";
import Link from "next/link";

const ErrorMsg = ({
  title,
  description,
  buttonText,
  buttonHref,
  image,
}) => {
  return (
    <section className="container mx-auto flex min-h-[70vh] flex-col items-center justify-center px-4 text-center">

      <Image
        src={image}
        alt={title}
        width={400}
        height={400}
        className="mb-8 max-w-xs md:max-w-md"
      />

      <p className="text-3xl font-bold text-slate-900 md:text-4xl">
        {title}
      </p>

      <p className="mt-4 max-w-md text-slate-600">
        {description}
      </p>

      {buttonText && buttonHref && (
        <Link
          href={buttonHref}
          className="mt-8 rounded-lg bg-black px-6 py-3 font-medium text-white transition hover:bg-slate-800"
        >
          {buttonText}
        </Link>
      )}

    </section>
  );
};

export default ErrorMsg;