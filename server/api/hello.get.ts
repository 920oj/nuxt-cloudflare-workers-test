export default defineEventHandler(async () => {
  const url = "https://worldtimeapi.org/api/timezone/Asia/Tokyo"
  const res = await $fetch(url)
  return {
    currentDate: new Date().toISOString(),
    fetchResponse: res,
  }
})
