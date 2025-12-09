// src/components/common/InfoPage.tsx

interface InfoPageProps {
  title: string;
  subtitle?: string;
  sections?: {
    heading: string;
    text: string;
  }[];
}

export default function InfoPage({ title, subtitle, sections }: InfoPageProps) {
  return (
    <div className="min-h-screen py-16 px-6 text-center bg-white">
      <h1 className="text-5xl font-bold">{title}</h1>

      {subtitle && (
        <p className="mt-6 max-w-3xl mx-auto text-lg text-gray-600">
          {subtitle}
        </p>
      )}

      {sections && (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12 max-w-6xl mx-auto">
          {sections.map((item, index) => (
            <div key={index} className="bg-[#F6F8FF] p-6 rounded-lg shadow-md">
              <h2 className="text-xl font-semibold mb-2">{item.heading}</h2>
              <p>{item.text}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
