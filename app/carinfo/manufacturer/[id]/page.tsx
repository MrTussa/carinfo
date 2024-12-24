import Image from "next/image";
import { getPayload } from "payload";
import configPromise from "@payload-config";
const Page = async ({ params }: { params: Promise<{ id: string }> }) => {
  const payload = getPayload({ config: configPromise });

  const data = (await payload).findByID({
    collection: "manufacturers",
    id: (await params).id,
  });

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 text-gray-800">
      <section className="bg-white shadow-lg rounded-lg py-8 mb-12 mx-4">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center md:items-start space-y-4 md:space-y-0 md:space-x-6">
            <Image
              src="/placeholder.svg?height=120&width=120"
              alt="AutoCorp Logo"
              width={120}
              height={120}
              className="rounded-full"
            />
            <div className="text-center md:text-left">
              <h1 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-cyan-500 mb-2">
                AutoCorp
              </h1>
              <p className="text-xl text-gray-600 mb-4">Established 1970</p>
              <p className="text-lg text-gray-700 max-w-2xl">
                AutoCorp has been at the forefront of automotive innovation
                since 1970, blending cutting-edge technology with timeless
                design to create vehicles that inspire and perform. Our
                commitment to quality and innovation drives us to push the
                boundaries of what's possible in the automotive industry.
              </p>
            </div>
          </div>
        </div>
      </section>

      <main className="container mx-auto px-4 pb-12">
        <section className="mb-16">
          <h3 className="text-2xl font-semibold mb-8 text-center">
            Our Latest Models
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {["Velocity", "Eco-Cruise", "LuxeTrek"].map((model, index) => (
              <div
                key={model}
                className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow"
              >
                <Image
                  src={`/placeholder.svg?height=200&width=300&text=${model}`}
                  alt={`${model} model`}
                  width={300}
                  height={200}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h4 className="text-xl font-semibold mb-2">{model}</h4>
                  <p className="text-gray-600 mb-4">
                    Redefining performance and efficiency.
                  </p>
                  <a
                    href="#"
                    className="text-blue-600 hover:text-blue-800 transition-colors font-medium"
                  >
                    Learn more →
                  </a>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="bg-gradient-to-r from-blue-600 to-cyan-500 text-white rounded-lg p-8 text-center">
          <h3 className="text-3xl font-bold mb-4">
            Experience the Future of Driving
          </h3>
          <p className="text-xl mb-6">
            Book a test drive today and feel the difference.
          </p>
          <button className="bg-white text-blue-600 px-6 py-2 rounded-full font-semibold hover:bg-gray-100 transition-colors">
            Book Now
          </button>
        </section>
      </main>
    </div>
  );
};

export default Page;
