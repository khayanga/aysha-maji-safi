import Image from "next/image";

const images = [
  "/pic1.jpg",
  "/pic2.jpg",
  "/pic3.jpg",
  
];

const Gallery = () => {
  return (
    <section className="py-24 lg:py-32 bg-primary/10">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="text-center mb-12">
          <a
            href="https://www.linkedin.com/in/asha-saad-4a7ab2182?trk=contact-info"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block"
          >
            <h2 className="font-serif text-3xl md:text-4xl text-foreground hover:text-primary transition-colors cursor-pointer">
              FOLLOW ON @AYSHAKIUMAJISAFI.
            </h2>
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {images.map((img, index) => (
            <div
              key={index}
              className="aspect-square overflow-hidden group cursor-pointer"
            >
              <Image
                src={img}
                width={500}
                height={500}
                alt={`Instagram ${index + 1}`}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;