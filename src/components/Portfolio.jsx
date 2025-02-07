import { Card } from "./Card";

const CardData = [
  {
    id: 1,
    image: "https://images.unsplash.com/photo-1579403124614-197f69d8187b",
    title: "Creative Portfolio",
    url: "https://google.com",
  },
  {
    id: 2,
    image: "https://images.unsplash.com/photo-1579403124614-197f69d8187b",
    title: "Innovative Designs",
    url: "https://google.com",
  },
  {
    id: 3,
    image: "https://images.unsplash.com/photo-1579403124614-197f69d8187b",
    title: "Artistic Expression",
    url: "https://google.com",
  },
  {
    id: 4,
    image: "https://images.unsplash.com/photo-1579403124614-197f69d8187b",
    title: "Project Success",
    url: "https://google.com",
  },
];

function Portfolio() {
  return (
    <div className="py-[80px]  text-left">
      <h2 className="font-bold text-3xl">Portfolio</h2>

      <p className="mt-3">
        Browse through a selection of your finest work, capturing the essence of
        your creative journey.
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 mt-8">
        {CardData.map((item) => (
          <Card
            key={item.id}
            image={item.image}
            title={item.title}
            url={item.url}
          />
        ))}
      </div>
    </div>
  );
}

export { Portfolio };
