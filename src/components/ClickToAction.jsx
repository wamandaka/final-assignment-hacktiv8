import React from "react";

const ClickToAction = () => {
  return (
    <div>
      <section class="overflow-hidden bg-[url(https://images.unsplash.com/photo-1489987707025-afc232f7ea0f?q=80&w=2670&auto=format&fit=crop)] bg-cover bg-top bg-no-repeat w-full">
        <div class="bg-black/50 p-8 md:p-12 lg:px-16 lg:py-24">
          <div class="text-center md:text-start">
            <h2 class="text-2xl font-bold text-white sm:text-3xl md:text-5xl">
              Latest Shirts
            </h2>

            <p class="hidden text-white/90 md:mt-6 md:block md:text-lg max-w-lg">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Inventore officia corporis quasi doloribus iure architecto quae
              voluptatum beatae excepturi dolores.
            </p>

            <div class="mt-4 sm:mt-8">
              <a
                href="#"
                class="inline-block rounded-full bg-indigo-600 px-12 py-3 text-sm font-medium text-white transition hover:bg-indigo-700 focus:outline-none focus:ring focus:ring-yellow-400"
              >
                Get Yours Today
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ClickToAction;
