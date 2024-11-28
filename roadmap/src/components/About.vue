<!-- eslint-disable vue/multi-word-component-names -->
<script setup>
import { RouterLink } from "vue-router"
</script>
<template>
 <!-- Start of the About Section -->
<div id="aboutMe"></div>
<br/><br/>
 <section >
        <div class="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16">
            <div class="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-16">
                <div class="relative h-64 overflow-hidden rounded-lg sm:h-80 lg:order-last lg:h-full">
                    <iframe width="560" height="315" src="https://www.youtube.com/embed/MLpWrANjFbI?si=Uqe4WQQC1ckNCh1K" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen class="absolute inset-0 h-full w-full object-cover"></iframe>
                </div>
                <div class="lg:py-24">
                    <h2 class="text-3xl font-bold sm:text-4xl">About Me</h2>
                    <p class="mt-4 text-gray-600">
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aut qui hic atque tenetur quis
                    eius quos ea neque sunt, accusantium soluta minus veniam tempora deserunt? Molestiae eius
                    quidem quam repellat.</p>
                    <div class="relative inline-flex mt-9 group">
                        <div class="absolute transitiona-all duration-1000 opacity-70 inset-0 bg-gradient-to-r from-[#44BCFF] via-[#FF44EC] to-[#FF675E] rounded-xl blur-lg filter group-hover:opacity-100 group-hover:duration-200"></div>
                        <RouterLink
                            to="#"
                            title=""
                            class="relative inline-flex items-center justify-center px-8 py-3 sm:text-sm sm:py-3.5 text-base font-semibold text-white transition-all duration-200 bg-indigo-600 border border-transparent rounded-lg hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-600"
                            role="button">
                            Download My CV
                        </RouterLink>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <!-- End of the About Section -->
     <RouterLink/>
</template>