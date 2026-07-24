import { useState } from "react";
import { motion } from "framer-motion";
import AnimatedSection from "./AnimatedSection";

export default function UploadCard() {

  const [image, setImage] = useState(null);

  function handleImage(e) {
    if (e.target.files[0]) {
      setImage(URL.createObjectURL(e.target.files[0]));
    }
  }

  return (
    <section className="max-w-5xl mx-auto px-8">

      <AnimatedSection>

        <motion.div

          whileHover={{ scale: 1.01 }}

          className="rounded-[35px] bg-white border border-gray-200 shadow-xl p-10"

        >

          <h2 className="text-3xl font-bold text-center">

            Upload Waste Image

          </h2>

          <label className="mt-10 flex flex-col justify-center items-center border-2 border-dashed border-green-400 rounded-3xl h-[350px] cursor-pointer hover:bg-green-50 transition">

            {image ? (

              <img
                src={image}
                alt="preview"
                className="h-full object-cover rounded-3xl"
              />

            ) : (

              <>

                <div className="text-7xl">

                    📷

                </div>

                <h3 className="mt-5 text-2xl font-semibold">

                    Click to Upload

                </h3>

                <p className="mt-2 text-gray-500">

                    JPG • PNG • JPEG

                </p>

              </>

            )}

            <input
              type="file"
              accept="image/*"
              className="hidden"
              onChange={handleImage}
            />

          </label>

        </motion.div>

      </AnimatedSection>

    </section>
  );
}