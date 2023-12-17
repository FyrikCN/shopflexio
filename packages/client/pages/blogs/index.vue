<template>
  <div class="px-4 blogs-page lg:px-0 pt-28">
    <div class="max-w-6xl mx-auto mb-6">
      <el-menu :default-active="1" class="menu" mode="horizontal" @select="handleSelect">
        <el-menu-item index="1">Beginners</el-menu-item>
        <el-menu-item index="2">WorkGPT</el-menu-item>
      </el-menu>
    </div>
    <article class="grid max-w-6xl grid-cols-1 gap-10 m-auto lg:grid-cols-2 xl:grid-cols-3">
      <nuxt-link v-for="(item, index) in blogList" :key="index" :to="item.to">
        <article>
          <el-image style="min-height: 200px" :src="item.image" />
          <h5 class="mb-2 text-xl font-bold" style="color: #181818">{{ item.title }}</h5>
          <time class="text-gray-400"> {{ item.createTime }} </time>
          <div class="flex gap-2 mt-3 mb-4 tags">
            <div
              v-for="tag in tags"
              :key="tag"
              class="px-5 text-lg border border-black border-solid rounded-full"
              style="line-height: 1.7"
            >
              <span>
                {{ tag }}
              </span>
            </div>
          </div>
        </article>
      </nuxt-link>
    </article>
  </div>
</template>

<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api'
import blog4CoverUrl from '@/assets/img/blog4_1.jpg?url'

export default defineComponent({
  name: 'Blogs',
  setup() {
    const tags = ['Beginners', 'WorkGPT']

    const blogList = [
      {
        title:
          "Crafting Your Brand's Story with WorkGPT: A Guide to Authentic and Compelling Narrative Creation",
        image:
          'https://images.unsplash.com/photo-1561715276-a2d087060f1d?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&w=4800',
        createTime: 'Apr 24, 2022',
        to: '/blogs/blog1',
        tags,
      },
      {
        title: "Maximizing Your Shopify Store's Potential: The Benefits of Adding a Blog Section",
        image:
          'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&w=4800',
        createTime: 'Apr 12, 2023',
        to: '/blogs/blog2',
        tags,
      },
      {
        title:
          'Beyond the Basics: How Detailed Product Titles and Descriptions Can Set Your Shopify Store Apart',
        image:
          'https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&w=4800',
        createTime: 'Apr 24, 2023',
        to: '/blogs/blog3',
        tags,
      },
      {
        title: 'Managing Out-of-Stock Products and Keeping Customers Happy',
        image: blog4CoverUrl,
        createTime: 'Dec 15, 2023',
        to: '/blogs/blog4',
        tags,
      },
      {
        title: 'Shopify Automation Tool: Syncing Data with Google Sheets',
        image: 'https://miro.medium.com/v2/resize:fit:1400/0*m66lMF7sVFRkGYrD.jpg',
        createTime: 'Jun 20, 2023',
        to: '/blogs/blog5',
        tags,
      },
      {
        title: 'Asana <>Shopify Inventory Management',
        image: 'https://miro.medium.com/v2/resize:fit:1400/0*yOmpLNWBWSkK3ruy.png',
        createTime: 'Mar 8, 2023',
        to: '/blogs/blog6',
        tags,
      },
    ]

    return { tags, blogList }
  },
})
</script>
