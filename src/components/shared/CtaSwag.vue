<template>
  <div class="relative bg-gray-900">
    <div
      class="
        relative
        h-56
        bg-cyan-600
        sm:h-72
        md:absolute md:left-0 md:h-full md:w-1/2
      "
    >
      <img
        class="w-full h-full object-cover"
        src="../../assets/switcheoverse.jpg"
        alt=""
      />
      <div
        aria-hidden="true"
        class="absolute inset-0 bg-gradient-to-r from-teal-500 to-cyan-600"
        style="mix-blend-mode: multiply"
      />
    </div>
    <div
      class="
        relative
        mx-auto
        max-w-md
        px-4
        py-12
        sm:max-w-7xl sm:px-6 sm:py-20
        md:py-28
        lg:px-8 lg:py-32
      "
    >
      <div class="md:ml-auto md:w-1/2 md:pl-10">
        <h2
          class="text-base font-semibold uppercase tracking-wider text-gray-300"
        >
          Need swag?
        </h2>
        <p
          class="
            mt-2
            text-white text-3xl
            font-extrabold
            tracking-tight
            sm:text-4xl
          "
        >
          We’ve got you covered
        </p>
        <p class="mt-3 text-lg text-gray-300">
          Our community artists have created some uniquely awesome designs to
          help promote products like Demex. From time to time, we offer physical
          marketing materials <em>(free of charge!)</em> with support from our
          sponsors.
        </p>
        <div class="mt-8">
          <div class="inline-flex rounded-md shadow">
            <a
              href="https://switcheoverse.com"
              target="_blank"
              rel="noopener"
              class="
                inline-flex
                items-center
                justify-center
                px-5
                py-3
                border border-transparent
                text-base
                font-medium
                rounded-md
                text-gray-900
                bg-white
                hover:bg-gray-50
              "
            >
              Get some swag
              <font-awesome-icon
                :icon="['fas', 'external-link']"
                class="-mr-1 ml-3 text-gray-400"
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
