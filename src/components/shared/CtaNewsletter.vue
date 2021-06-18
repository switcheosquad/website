<template>
  <div class="bg-cyan-800">
    <div
      class="
        max-w-7xl
        mx-auto
        py-12
        px-4
        sm:px-6
        lg:py-16 lg:px-8 lg:flex lg:items-center
      "
    >
      <div class="lg:w-0 lg:flex-1">
        <h2
          id="newsletter-headline"
          class="text-3xl font-extrabold tracking-tight text-white sm:text-4xl"
        >
          Sign up for our newsletter
        </h2>
        <p class="mt-3 max-w-3xl text-lg leading-6 text-gray-300">
          We rarely send out emails, but when we do, it's worth it!
        </p>
      </div>
      <div class="mt-8 lg:mt-0 lg:ml-8">
        <form
          action="https://switcheosquad.us6.list-manage.com/subscribe/post?u=b364a1a104c8d7b60006622b9&amp;id=f5a39ae911"
          method="post"
          class="sm:flex"
        >
          <label for="emailAddress" class="sr-only">Email address</label>
          <input
            id="emailAddress"
            name="EMAIL"
            type="email"
            autocomplete="email"
            required=""
            placeholder="Enter your email"
            class="
              w-full
              px-5
              py-3
              border border-transparent
              placeholder-gray-500
              focus:ring-2
              focus:ring-offset-2
              focus:ring-cyan-400
              focus:ring-offset-gray-900
              focus:border-white
              sm:max-w-xs
              rounded-md
            "
          />
          <div class="mt-3 rounded-md shadow sm:mt-0 sm:ml-3 sm:flex-shrink-0">
            <input
              type="hidden"
              name="b_b364a1a104c8d7b60006622b9_f5a39ae911"
              value=""
            />
            <button
              type="submit"
              class="
                w-full
                flex
                items-center
                justify-center
                px-5
                py-3
                border border-transparent
                text-base
                font-medium
                rounded-md
                text-white
                bg-gradient-to-r
                from-teal-500
                to-cyan-600
                hover:from-teal-600 hover:to-cyan-700
                focus:outline-none
                focus:ring-2
                focus:ring-offset-2
                focus:ring-cyan-400
                focus:ring-offset-gray-900
              "
            >
              Notify me
            </button>
          </div>
        </form>
        <p class="mt-3 text-sm text-gray-300">
          We care about the protection of your data. Read our
          <router-link
            :to="{ name: 'privacy' }"
            class="text-white font-medium underline"
            >Privacy Policy.</router-link
          >
        </p>
      </div>
    </div>
  </div>
</template>
