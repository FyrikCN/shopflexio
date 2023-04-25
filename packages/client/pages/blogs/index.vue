<template>
    <div class="blogs-page px-4 lg:px-0 pt-32">
         <article class="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-10 max-w-6xl m-auto">
          <nuxt-link :to="`/blogs/blog1`">
          <article>
            <el-image style="min-height: 200px;" src="https://images.unsplash.com/photo-1561715276-a2d087060f1d?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&w=4800"  />
            <h5 class="font-bold text-xl mb-2" style="color: #181818;">
              Maximizing Your Shopify Store's Potential: The Benefits of Adding a Blog Section
            </h5>
            <time class="text-gray-400">
              Apr 24, 2022
            </time>
          </article>
        </nuxt-link>
        <nuxt-link :to="`/blogs/blog2`">
          <article>
            <el-image style="min-height: 200px;" src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&w=4800"  />
            <h5 class="font-bold text-xl mb-2" style="color: #181818;">
              Crafting Your Brand's Story with WorkGPT: A Guide to Authentic and Compelling Narrative Creation
            </h5>
            <time class="text-gray-400">
              Apr 12, 2023
            </time>
          </article>
        </nuxt-link>
        <nuxt-link :to="`/blogs/blog3`">
          <article>
            <el-image style="min-height: 200px;" src="https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&w=4800"  />
            <h5 class="font-bold text-xl mb-2" style="color: #181818;">
              Beyond the Basics: How Detailed Product Titles and Descriptions Can Set Your Shopify Store Apart
            </h5>
            <time class="text-gray-400">
              Apr 24, 2023
            </time>
          </article>
        </nuxt-link>
      </article>
    </div>
  </template>
  
  <script lang="ts">
  import { computed, defineComponent, useAsync } from '@nuxtjs/composition-api'
  
  import { getBlogData } from '~/api'
  export default defineComponent({
    name: 'Blogs',
    setup() {
      const blogData = useAsync(() => {
        return getBlogData()
      })
      const list = computed(() => {
        const res = blogData.value?.list || []
        return res.sort((a, b) => {
          if (a.order == b.order) {
            return a.updated_time - b.updated_time
          }
  
          return Number(a.order) - Number(b.order)
        })
      })
      const formattedList = computed(() => list.value.filter((b) => b.published))
      return { blogData, list, formattedList }
    },
  })
  </script>
  
  <style lang="scss" scoped></style>
  