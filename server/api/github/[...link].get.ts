export default defineEventHandler(async (event) => {
  const link = getRouterParam(event, 'link')

  if (!link) {
    throw createError({
      statusCode: 400,
      statusMessage: 'Link not found'
    })
  }

  try {
    const url = `https://api.github.com/repos/${link}`
    // 从 url 解析一组 JSON 数据
    interface GitHubData {
      stargazers_count: number
      forks_count: number
      // 可选字段，如果你后续可能用到
      full_name?: string
      description?: string
      html_url?: string
    }

    const ghData: GitHubData = await $fetch<GitHubData>(url)

    return {
      stars: ghData.stargazers_count,
      forks: ghData.forks_count
    }
  } catch (error) {
    throw createError({
      statusCode: 404,
      statusMessage: `Repo not found: ${link}`
    })
  }
})
