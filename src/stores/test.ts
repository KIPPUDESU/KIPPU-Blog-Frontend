export const useTestStore = defineStore(
  'KippuBlog-public-test',
  () => {
    const PlaneOrSolid = ref(false)

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
