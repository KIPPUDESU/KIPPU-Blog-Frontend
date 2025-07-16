export default defineNuxtPlugin(() => {
    // “手动”控制滚动，禁用你的自动行为。
    history.scrollRestoration = 'manual';
    console.log(
     '%c[Plugin] scroll-restoration.client.ts: history.scrollRestoration set to "manual".',
     'color: purple; font-weight: bold;'
   );
});