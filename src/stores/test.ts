export const useTestStore = defineStore(
  'KippuBlog-public-test',
  () => {
    const PlaneOrSolid = ref(false)

    // 定义的全局的方法，引用全局 useTestStore 就能使用
    const KippuChenge = () => {
      PlaneOrSolid.value = !PlaneOrSolid.value
    }

    return {
      PlaneOrSolid,
      KippuChenge
    }
  },
  {
    persist: true // 持久化
  }
)
