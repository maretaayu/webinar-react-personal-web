function Card({ image, title, url }) {
  return (
    <a
      href={url}
      className="font-bold text-black text-left flex flex-col gap-4"
    >
      <img
        src={image}
        alt={title}
        className="rounded-2xl w-full md:w-[300px] h-[400px]"
      />
      <p>{title}</p>
    </a>
  );
}

export { Card };
