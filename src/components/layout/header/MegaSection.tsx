import Link from "next/link";

const MegaSection = ({ data }: any) => {
  return (
    <Link
      href={data.href}
      className="w-1/3 hover:bg-main p-3 rounded-lg block"
    >
      <h3 className="font-semibold text-[16px] text-foreground mb-1">
        {data.title}
      </h3>

      <p className="text-[14px] text-foreground leading-5">
        {data.description}
      </p>
    </Link>
  );
};

export default MegaSection;
